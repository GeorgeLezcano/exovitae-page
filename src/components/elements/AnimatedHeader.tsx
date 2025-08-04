import { useEffect, useRef } from "react";
import * as THREE from "three";

type AnimatedHeaderProps = {
  className?: string;
  height?: number | string;
};

export function AnimatedHeader({ className = "", height = "60vh" }: AnimatedHeaderProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const heightPx = typeof height === "number" ? height : mount.clientHeight || 400;

    // === THREE.js Scene Setup ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000010);

    const camera = new THREE.PerspectiveCamera(60, width / heightPx, 0.1, 1000);
    camera.position.set(0, 1, 16); // slight Y offset

    let renderer = rendererRef.current;
    if (!renderer) {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      rendererRef.current = renderer;
      mount.appendChild(renderer.domElement);
    }
    renderer.setSize(width, heightPx);

    // === Lighting ===
    const ambientLight = new THREE.AmbientLight(0x6699cc, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // === Starfield Background ===
    const starsGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 5000; i++) {
      starVertices.push(
        THREE.MathUtils.randFloatSpread(1000),
        THREE.MathUtils.randFloatSpread(1000),
        THREE.MathUtils.randFloatSpread(1000)
      );
    }
    starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // === DNA Helix ===
    const dnaGroup = new THREE.Group();

    // ⚙️ Adjust DNA size/spacing/turns here:
    const turns = 2;
    const pointsPerTurn = 40;
    const totalPoints = turns * pointsPerTurn;
    const heightBetweenPoints = 0.3;
    const radius = 1.5;

    const sphereGeom = new THREE.SphereGeometry(0.4, 32, 32);
    const cylinderGeom = new THREE.CylinderGeometry(0.05, 0.05, 1.2, 8);

    const brightBlue = new THREE.MeshStandardMaterial({
      color: 0x00bfff,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x224466,
      emissiveIntensity: 0.4,
    });

    for (let i = 0; i < totalPoints; i++) {
      const angle = (i / pointsPerTurn) * 2 * Math.PI;
      const y = i * heightBetweenPoints - (totalPoints * heightBetweenPoints) / 2;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      const sphere1 = new THREE.Mesh(sphereGeom, brightBlue);
      sphere1.position.set(x1, y, z1);
      dnaGroup.add(sphere1);

      const sphere2 = new THREE.Mesh(sphereGeom, brightBlue);
      sphere2.position.set(x2, y, z2);
      dnaGroup.add(sphere2);

      // Optional: DNA "rungs"
      if (i % 4 === 0 && i < totalPoints - 1) {
        const rung = new THREE.Mesh(cylinderGeom, brightBlue);
        const midX = (x1 + x2) / 2;
        const midY = y;
        const midZ = (z1 + z2) / 2;
        rung.position.set(midX, midY, midZ);

        const dir = new THREE.Vector3(x2 - x1, 0, z2 - z1).normalize();
        const axis = new THREE.Vector3(0, 1, 0).normalize();
        const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, dir);
        rung.quaternion.copy(quaternion);

        dnaGroup.add(rung);
      }
    }

    dnaGroup.position.set(0, 0, 0);
    dnaGroup.scale.set(1.8, 1.8, 1.8); // 🔍 DNA Zoom/Scale
    scene.add(dnaGroup);

    // === Black Hole + Glow Effects ===
    const blackHoleGroup = new THREE.Group();

    // ⚫ Core Black Hole — darker + more emissive
    const blackHoleGeom = new THREE.SphereGeometry(1.2, 64, 64);
    const blackHoleMat = new THREE.MeshStandardMaterial({
      color: 0x000005, // darker than before
      roughness: 0.3,
      metalness: 1,
      emissive: 0x000022,
      emissiveIntensity: 0.7,
    });
    const blackHole = new THREE.Mesh(blackHoleGeom, blackHoleMat);
    blackHoleGroup.add(blackHole);

    // ✨ Inner Glow
    const glowGeom = new THREE.SphereGeometry(1.7, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x3399ff,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeom, glowMat);
    blackHoleGroup.add(glow);

    // 🌌 Outer Glow / Cosmic Halo
    const outerGlowGeom = new THREE.SphereGeometry(2.4, 32, 32);
    const outerGlowMat = new THREE.MeshBasicMaterial({
      color: 0x112244,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const outerGlow = new THREE.Mesh(outerGlowGeom, outerGlowMat);
    blackHoleGroup.add(outerGlow);

    // 🌟 Accretion Particles
    const particleCount = 100;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = [];
    for (let i = 0; i < particleCount; i++) {
      const radius = THREE.MathUtils.randFloat(1.8, 2.5);
      const theta = Math.acos(THREE.MathUtils.randFloatSpread(2));
      const phi = THREE.MathUtils.randFloat(0, 2 * Math.PI);
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);
      particlePositions.push(x, y, z);
    }
    particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x66bbff,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    blackHoleGroup.add(particles);

    blackHoleGroup.position.set(0, 0, 0);
    blackHoleGroup.scale.set(1.8, 1.8, 1.8); // 🔍 Black Hole Zoom/Scale
    scene.add(blackHoleGroup);

    // === Animation Loop ===
    let flickerDirection = 1;
    const animate = () => {
      dnaGroup.rotation.y += 0.0015;
      blackHoleGroup.rotation.y -= 0.002;

      // Particle opacity flicker
      if (particleMaterial.opacity >= 1) flickerDirection = -1;
      else if (particleMaterial.opacity <= 0.5) flickerDirection = 1;
      particleMaterial.opacity += flickerDirection * 0.005;

      renderer!.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    // === Resize Handling ===
    const handleResize = () => {
      if (!mount) return;
      const newWidth = mount.clientWidth;
      const newHeight = typeof height === "number" ? height : mount.clientHeight || 400;
      renderer!.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      window.removeEventListener("resize", handleResize);

      dnaGroup.children.forEach((obj) => {
        if ((obj as any).geometry) (obj as any).geometry.dispose();
        if (Array.isArray((obj as any).material)) {
          (obj as any).material.forEach((m: any) => m.dispose());
        } else if ((obj as any).material) {
          (obj as any).material.dispose();
        }
        scene.remove(obj);
      });
      scene.remove(dnaGroup);

      starsGeometry.dispose();
      starsMaterial.dispose();
      scene.remove(starField);

      blackHoleGroup.children.forEach((obj) => {
        if ((obj as any).geometry) (obj as any).geometry.dispose();
        if (Array.isArray((obj as any).material)) {
          (obj as any).material.forEach((m: any) => m.dispose());
        } else if ((obj as any).material) {
          (obj as any).material.dispose();
        }
        blackHoleGroup.remove(obj);
      });
      scene.remove(blackHoleGroup);

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
  <header className={className} style={{ position: "relative", width: "100%", height }}>
    {/* This div holds the 3D animation */}
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",  // so clicks pass through to buttons
      }}
    />

    {/* This div is your UI overlay on top of animation */}
    {/* <div
      style={{
        position: "relative",
        zIndex: 1,             // higher than animation div
        height: "100%",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        color: "white",
        pointerEvents: "auto", // allow interaction here
      }}
    >
      <button
        onClick={() => alert("Hello from button!")}
        style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#2196f3",
          color: "white",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div> */}
  </header>
);

}
