import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise.js";

type HeaderProps = {
  className?: string;
  height?: number | string;
};

export function Header({ className = "", height = "50vh" }: HeaderProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    // Calculate height in pixels for canvas size
    const heightPx =
      typeof height === "number"
        ? height
        : mount.clientHeight || 400;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050511);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 1000);
    camera.position.set(0, 50, 100);

    // Renderer
    let renderer = rendererRef.current;
    if (!renderer) {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      rendererRef.current = renderer;
      mount.appendChild(renderer.domElement);
    }
    renderer.setSize(width, heightPx);

    // Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(50, 100, 50);
    scene.add(directionalLight);

    // Terrain geometry
    const planeWidth = 100;
    const planeHeight = 100;
    const segments = 100;
    const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight, segments, segments);

    const perlin = new ImprovedNoise();
    const noiseScale = 0.1;
    const zScale = 15;

    for (let i = 0; i < geometry.attributes.position.count; i++) {
      const x = geometry.attributes.position.getX(i);
      const y = geometry.attributes.position.getY(i);
      const noiseValue = perlin.noise(x * noiseScale, y * noiseScale, 0);
      geometry.attributes.position.setZ(i, noiseValue * zScale);
    }
    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      flatShading: false,
      wireframe: false,
      roughness: 0.8,
      metalness: 0.1,
    });

    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI / 2;
    scene.add(terrain);

    // Animate
    const animate = () => {
      const time = Date.now() * 0.001;

      terrain.rotation.z += 0.002;
      terrain.position.y = Math.sin(time) * 2;

      camera.position.x = Math.sin(time * 0.3) * 100;
      camera.position.z = Math.cos(time * 0.3) * 100;
      camera.lookAt(0, 0, 0);

      renderer!.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mount) return;
      const newWidth = mount.clientWidth;
      const newHeight = typeof height === "number" ? height : mount.clientHeight || 400;
      renderer!.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (mount.contains(rendererRef.current.domElement)) {
          mount.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current = null;
      }
    };
  }, [height]);

  return (
    <header
      className={className}
      style={{ position: "relative", width: "100%", height }}
    >
      <div
        ref={mountRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
          userSelect: "none",
          paddingTop: typeof height === "string" ? height : `${height}px`,
        }}
      >
      </div>
    </header>
  );
}
