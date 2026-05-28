import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function FuturisticOrb() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Tech core (Icosahedron)
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.05, 2),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8, // sky blue
        emissive: 0x0f172a, // dark slate
        metalness: 0.8,
        roughness: 0.2,
        wireframe: true,
      }),
    );
    group.add(core);

    // Inner glowing sphere
    const innerCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.85, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x14b8a6, // teal
        transparent: true,
        opacity: 0.15,
      })
    );
    group.add(innerCore);

    // Orbiting rings
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x818cf8, // indigo
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
    });

    [1.55, 1.85, 2.15].forEach((radius, index) => {
      // Create dashed line effect for rings
      const ringGeometry = new THREE.TorusGeometry(radius, 0.005, 8, 100);
      const ring = new THREE.Mesh(ringGeometry, ringMaterial.clone());
      ring.rotation.x = Math.PI / 2 + index * 0.5;
      ring.rotation.y = index * 0.8;
      group.add(ring);
    });

    // Data nodes (particles)
    const particlesGeometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let index = 0; index < 300; index += 1) {
      const radius = 1.3 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      vertices.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      );
    }
    particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const dataNodes = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({ color: 0x38bdf8, size: 0.02, transparent: true, opacity: 0.6 }),
    );
    group.add(dataNodes);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const blueLight = new THREE.PointLight(0x38bdf8, 2, 10);
    blueLight.position.set(3, 2, 4);
    scene.add(blueLight);
    
    const tealLight = new THREE.PointLight(0x14b8a6, 1.5, 10);
    tealLight.position.set(-3, -2, 3);
    scene.add(tealLight);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      group.rotation.y += 0.003;
      group.rotation.x = Math.sin(Date.now() * 0.0003) * 0.15;
      core.rotation.z += 0.002;
      core.rotation.x -= 0.001;
      dataNodes.rotation.y -= 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      renderer.dispose();
      particlesGeometry.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-[360px] w-full md:h-[520px]" aria-hidden="true" />;
}

export default FuturisticOrb;
