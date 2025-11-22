import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Environment } from "../../constants/Enviroment";

type AnimatedHeaderProps = {
  className?: string;
  height?: number | string;
};

/** Tunable knobs */
const CONFIG = {
  scene: {
    background: 0x000010,
  },
  renderer: {
    maxPixelRatio: 2,
    antialias: true,
  },
  dna: {
    /** radians/sec */
    rotYSpeed: 0.3,
    /** radians amplitude & Hz-ish speed for subtle tilt */
    wobbleXAmp: 0.05,
    wobbleXSpeed: 0.25,
    /** overall scale (zoom) */
    scale: 1.8,
    /** helix shape */
    turns: 2,
    pointsPerTurn: 40,
    stepY: 0.3,
    radius: 1.5,
    /** geometry sizes/quality */
    sphereRadius: 0.4,
    sphereSegments: 24,
    rungRadius: 0.05,
    rungLength: 1.2,
    rungSegments: 8,
    /** rung frequency (every Nth point) */
    rungEvery: 4,
  },
  blackHole: {
    rotYSpeed: 1.2,
    wobbleXAmp: 0.03,
    wobbleXSpeed: 0.2,
    scale: 1.8,
    core: {
      radius: 1.2,
      widthSegments: 48,
      heightSegments: 48,
      color: 0x000005,
      roughness: 0.3,
      metalness: 1.0,
      emissive: 0x000022,
      emissiveIntensity: 0.6,
    },
    glow: {
      radius: 1.7,
      color: 0x3399ff,
      opacity: 0.45,
    },
    halo: {
      radius: 2.4,
      color: 0x112244,
      opacity: 0.18,
    },
  },
  stars: {
    far: {
      count: 2000,
      spread: 1200,
      size: 0.6,
      color: 0x9fbff6,
      rotYSpeed: 0.01, // rad/sec
      driftXAmp: 2.0,
      driftXSpeed: 0.02, // Hz-ish
      driftYAmp: 1.5,
      driftYSpeed: 0.015,
    },
    near: {
      count: 1200,
      spread: 700,
      size: 1.0,
      color: 0xdde7ff,
      rotYSpeed: -0.02,
      driftXAmp: 3.0,
      driftXSpeed: 0.03,
      driftYAmp: 2.0,
      driftYSpeed: 0.02,
      phaseOffset: 1.2, // phase shift vs far layer
    },
  },
  camera: {
    fov: 60,
    near: 0.1,
    far: 2000,
    basePos: { x: 0, y: 1, z: 16 },
    /** bobbing amplitudes and speeds */
    bobXAmp: 0.3,
    bobXSpeed: 0.1,
    bobYAmp: 0.15,
    bobYSpeed: 0.07,
  },
  lights: {
    ambient: { color: 0x6699cc, intensity: 0.6 },
    directional: {
      color: 0xffffff,
      intensity: 0.8,
      position: new THREE.Vector3(5, 10, 7),
    },
  },
} as const;

export function AnimatedHeader({
  className = "",
  height = "60vh",
}: AnimatedHeaderProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const resizeRafRef = useRef<number | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const getSize = () => {
      const w = mount.clientWidth;
      const h = typeof height === "number" ? height : mount.clientHeight || 400;
      return { w, h: Number(h) };
    };

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(CONFIG.scene.background);
    sceneRef.current = scene;

    const { w, h } = getSize();
    const camera = new THREE.PerspectiveCamera(
      CONFIG.camera.fov,
      w / h,
      CONFIG.camera.near,
      CONFIG.camera.far
    );
    camera.position.set(
      CONFIG.camera.basePos.x,
      CONFIG.camera.basePos.y,
      CONFIG.camera.basePos.z
    );
    cameraRef.current = camera;

    // Renderer
    let renderer = rendererRef.current;
    if (!renderer) {
      renderer = new THREE.WebGLRenderer({
        antialias: CONFIG.renderer.antialias,
        alpha: true,
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      rendererRef.current = renderer;
      mount.appendChild(renderer.domElement);
    }
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio || 1, CONFIG.renderer.maxPixelRatio)
    );
    renderer.setSize(w, h);

    // Lights
    const amb = new THREE.AmbientLight(
      CONFIG.lights.ambient.color,
      CONFIG.lights.ambient.intensity
    );
    const dir = new THREE.DirectionalLight(
      CONFIG.lights.directional.color,
      CONFIG.lights.directional.intensity
    );
    dir.position.copy(CONFIG.lights.directional.position);
    scene.add(amb, dir);

    // Helpers
    const disposeObject = (obj: THREE.Object3D) => {
      obj.traverse((child: any) => {
        child.geometry?.dispose?.();
        if (child.material) {
          if (Array.isArray(child.material))
            child.material.forEach((m: any) => m.dispose?.());
          else child.material.dispose?.();
        }
      });
    };

    const getCircleTexture = (() => {
      let tex: THREE.Texture | null = null;
      return () => {
        if (tex) return tex;
        const size = 64;
        const c = document.createElement("canvas");
        c.width = c.height = size;
        const g = c.getContext("2d")!;
        const r = size / 2;

        g.clearRect(0, 0, size, size);
        g.fillStyle = "rgba(255,255,255,1)";
        g.beginPath();
        g.arc(r, r, r, 0, Math.PI * 2);
        g.fill();

        tex = new THREE.CanvasTexture(c);
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.minFilter = THREE.LinearMipMapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        return tex;
      };
    })();

    // Parallax Starfield
    const makeStars = (
      count: number,
      spread: number,
      size: number,
      color: number
    ) => {
      const geom = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 0] = THREE.MathUtils.randFloatSpread(spread);
        pos[i * 3 + 1] = THREE.MathUtils.randFloatSpread(spread);
        pos[i * 3 + 2] = THREE.MathUtils.randFloatSpread(spread);
      }
      geom.setAttribute("position", new THREE.BufferAttribute(pos, 3));

      const mat = new THREE.PointsMaterial({
        size,
        color,
        transparent: true,
        map: getCircleTexture(),
        alphaTest: 0.5,
        depthWrite: true,
        blending: THREE.NormalBlending,
      });

      return new THREE.Points(geom, mat);
    };

    const starsGroup = new THREE.Group();
    const farStars = makeStars(
      CONFIG.stars.far.count,
      CONFIG.stars.far.spread,
      CONFIG.stars.far.size,
      CONFIG.stars.far.color
    );
    const nearStars = makeStars(
      CONFIG.stars.near.count,
      CONFIG.stars.near.spread,
      CONFIG.stars.near.size,
      CONFIG.stars.near.color
    );
    starsGroup.add(farStars, nearStars);
    scene.add(starsGroup);

    // DNA (instanced meshes)
    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);

    const {
      turns,
      pointsPerTurn,
      stepY,
      radius,
      sphereRadius,
      sphereSegments,
      rungRadius,
      rungLength,
      rungSegments,
      rungEvery,
      scale: dnaScale,
    } = CONFIG.dna;

    const sphereGeom = new THREE.SphereGeometry(
      sphereRadius,
      sphereSegments,
      sphereSegments
    );
    const rungGeom = new THREE.CylinderGeometry(
      rungRadius,
      rungRadius,
      rungLength,
      rungSegments
    );
    const brightBlue = new THREE.MeshStandardMaterial({
      color: 0x00bfff,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x224466,
      emissiveIntensity: 0.4,
    });

    const totalPoints = turns * pointsPerTurn;
    const spheres = new THREE.InstancedMesh(
      sphereGeom,
      brightBlue,
      totalPoints * 2
    );
    const rungs = new THREE.InstancedMesh(
      rungGeom,
      brightBlue,
      Math.floor(totalPoints / rungEvery)
    );
    spheres.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    rungs.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    const tmpMat = new THREE.Matrix4();
    const tmpQuat = new THREE.Quaternion();
    const tmpPos = new THREE.Vector3();
    const tmpScale = new THREE.Vector3(1, 1, 1);

    // Place spheres (two helices)
    let sIdx = 0;
    for (let i = 0; i < totalPoints; i++) {
      const angle = (i / pointsPerTurn) * Math.PI * 2;
      const y = i * stepY - (totalPoints * stepY) / 2;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      tmpPos.set(x1, y, z1);
      tmpQuat.identity();
      tmpMat.compose(tmpPos, tmpQuat, tmpScale);
      spheres.setMatrixAt(sIdx++, tmpMat);

      tmpPos.set(x2, y, z2);
      tmpQuat.identity();
      tmpMat.compose(tmpPos, tmpQuat, tmpScale);
      spheres.setMatrixAt(sIdx++, tmpMat);
    }
    spheres.instanceMatrix.needsUpdate = true;
    dnaGroup.add(spheres);

    // Place rungs every Nth point
    let rIdx = 0;
    for (let i = 0; i < totalPoints; i += rungEvery) {
      const angle = (i / pointsPerTurn) * Math.PI * 2;
      const y = i * stepY - (totalPoints * stepY) / 2;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      const midX = (x1 + x2) / 2;
      const midZ = (z1 + z2) / 2;

      tmpPos.set(midX, y, midZ);
      const dirVec = new THREE.Vector3(x2 - x1, 0, z2 - z1).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      tmpQuat.setFromUnitVectors(up, dirVec);
      tmpMat.compose(tmpPos, tmpQuat, tmpScale);
      rungs.setMatrixAt(rIdx++, tmpMat);
    }
    rungs.instanceMatrix.needsUpdate = true;
    dnaGroup.add(rungs);
    dnaGroup.scale.set(dnaScale, dnaScale, dnaScale);

    // Black hole
    const bh = CONFIG.blackHole;
    const blackHoleGroup = new THREE.Group();
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(
        bh.core.radius,
        bh.core.widthSegments,
        bh.core.heightSegments
      ),
      new THREE.MeshStandardMaterial({
        color: bh.core.color,
        roughness: bh.core.roughness,
        metalness: bh.core.metalness,
        emissive: bh.core.emissive,
        emissiveIntensity: bh.core.emissiveIntensity,
      })
    );
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(bh.glow.radius, 32, 32),
      new THREE.MeshBasicMaterial({
        color: bh.glow.color,
        transparent: true,
        opacity: bh.glow.opacity,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    );
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(bh.halo.radius, 32, 32),
      new THREE.MeshBasicMaterial({
        color: bh.halo.color,
        transparent: true,
        opacity: bh.halo.opacity,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    );
    blackHoleGroup.add(core, glow, halo);
    blackHoleGroup.scale.set(bh.scale, bh.scale, bh.scale);
    scene.add(blackHoleGroup);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      const dt = clock.getDelta();
      const t = clock.elapsedTime;

      // DNA + black hole rotation + subtle wobble
      dnaGroup.rotation.y += CONFIG.dna.rotYSpeed * dt;
      dnaGroup.rotation.x =
        Math.sin(t * CONFIG.dna.wobbleXSpeed) * CONFIG.dna.wobbleXAmp;

      blackHoleGroup.rotation.y -= CONFIG.blackHole.rotYSpeed * dt;
      blackHoleGroup.rotation.x =
        Math.cos(t * CONFIG.blackHole.wobbleXSpeed) *
        CONFIG.blackHole.wobbleXAmp;

      // Parallax stars
      starsGroup.rotation.y += CONFIG.stars.far.rotYSpeed * dt;
      farStars.position.x =
        Math.sin(t * CONFIG.stars.far.driftXSpeed) * CONFIG.stars.far.driftXAmp;
      farStars.position.y =
        Math.cos(t * CONFIG.stars.far.driftYSpeed) * CONFIG.stars.far.driftYAmp;

      nearStars.rotation.y += CONFIG.stars.near.rotYSpeed * dt;
      nearStars.position.x =
        Math.sin(
          t * CONFIG.stars.near.driftXSpeed + CONFIG.stars.near.phaseOffset
        ) * CONFIG.stars.near.driftXAmp;
      nearStars.position.y =
        Math.cos(
          t * CONFIG.stars.near.driftYSpeed +
            CONFIG.stars.near.phaseOffset * 0.666
        ) * CONFIG.stars.near.driftYAmp;

      // Camera bob
      camera.position.x =
        Math.sin(t * CONFIG.camera.bobXSpeed) * CONFIG.camera.bobXAmp;
      camera.position.y =
        CONFIG.camera.basePos.y +
        Math.sin(t * CONFIG.camera.bobYSpeed) * CONFIG.camera.bobYAmp;
      camera.lookAt(0, 0, 0);

      renderer!.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Resize (RAF-throttled)
    const onResize = () => {
      if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
      resizeRafRef.current = requestAnimationFrame(() => {
        const { w: nw, h: nh } = getSize();
        renderer!.setSize(nw, nh);
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
      });
    };
    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
      window.removeEventListener("resize", onResize);

      disposeObject(starsGroup);
      disposeObject(dnaGroup);
      disposeObject(blackHoleGroup);
      scene.remove(starsGroup, dnaGroup, blackHoleGroup);

      rendererRef.current?.dispose();
      if (
        rendererRef.current &&
        mount.contains(rendererRef.current.domElement)
      ) {
        mount.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
    };
  }, [height]);

  return (
    <header
      className={className}
      style={{ position: "relative", width: "100%", height }}
    >
      {/* 3D animation layer */}
      <div
        ref={mountRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* UI overlay layer */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          pointerEvents: "auto",
          paddingLeft: "10%",
        }}
      >
        {/* Overlay UI */}
        {/* Not using overlay button now. This will
        become a way to download the client */}
        {/* <a
          href={`${Environment.GameServerProd}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="animatedButton playNow">
            ▶ Play Game
          </button>
        </a> */}
      </div>
    </header>
  );
}
