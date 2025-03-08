// components/common/background/RetroBackground.tsx
"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";

export function RetroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  // TODO: change the colors
  const darkRetroColors = [
    { from: new THREE.Color("#00DDEB"), to: new THREE.Color("#FF007A") }, // Bleu néon → Rose néon
    { from: new THREE.Color("#6B00D7"), to: new THREE.Color("#00FF9F") }, // Violet sombre → Vert cyber
    { from: new THREE.Color("#FF007A"), to: new THREE.Color("#00DDEB") }, // Rose néon → Bleu néon
    { from: new THREE.Color("#00FF9F"), to: new THREE.Color("#6B00D7") }, // Vert cyber → Violet sombre
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // TODO: change the scene
    const scene = new THREE.Scene();

    // TODO: change the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // TODO: change the renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // TODO: change the background color
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // TODO: change the number of particles
    const particlesCount = 30;

    // TODO: change the geometry
    const particles = new THREE.Group();

    for (let i = 0; i < particlesCount; i++) {
      // TODO: change the geometry
      const geometry = new THREE.SphereGeometry(0.05, 8, 8);
      // TODO: change the material
      const material = new THREE.MeshBasicMaterial({
        color: darkRetroColors[0].from,
        transparent: true,
        opacity: 0.3,
      });

      // TODO: change the particle
      const particle = new THREE.Mesh(geometry, material);

      // TODO: change the position
      particle.position.x = Math.random() * 10 - 5;
      particle.position.y = Math.random() * 10 - 5;
      particle.position.z = Math.random() * 5 - 2.5;

      // TODO: change the velocity
      particle.userData.velocity = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.01,
      };

      // Associer un dégradé aléatoire de darkRetroColors
      const gradient =
        darkRetroColors[Math.floor(Math.random() * darkRetroColors.length)];
      particle.userData.colorStart = gradient.from;
      particle.userData.colorEnd = gradient.to;
      particle.userData.colorProgress = Math.random(); // Progression initiale entre 0 et 1
      particle.userData.colorSpeed = 0.001 + Math.random() * 0.002; // Vitesse de transition

      particles.add(particle);
    }

    // TODO: change the scene
    scene.add(particles);

    // TODO: change the handleResize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // TODO: change the animate
    const animate = () => {
      requestAnimationFrame(animate);

      // TODO: change the particles
      particles.children.forEach((object) => {
        const particle = object as THREE.Mesh;
        particle.position.x += particle.userData.velocity.x;
        particle.position.y += particle.userData.velocity.y;
        particle.position.z += particle.userData.velocity.z;

        if (Math.abs(particle.position.x) > 5)
          particle.userData.velocity.x *= -1;
        if (Math.abs(particle.position.y) > 5)
          particle.userData.velocity.y *= -1;
        if (Math.abs(particle.position.z) > 2.5)
          particle.userData.velocity.z *= -1;

        particle.userData.colorProgress += particle.userData.colorSpeed;
        if (particle.userData.colorProgress >= 1) {
          particle.userData.colorProgress = 0;

          const temp = particle.userData.colorStart;
          particle.userData.colorStart = particle.userData.colorEnd;
          particle.userData.colorEnd = temp;
        }

        const material = particle.material as THREE.MeshBasicMaterial;
        material.color.lerpColors(
          particle.userData.colorStart,
          particle.userData.colorEnd,
          particle.userData.colorProgress
        );
      });

      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}

export default RetroBackground;
