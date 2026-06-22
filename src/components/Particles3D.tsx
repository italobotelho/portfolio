"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

function ParticleCloud() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create 3000 data points forming a sphere
  const count = 3000;
  const [positions, colors] = useMemo(() => {
    const p = new Float32Array(count * 3);
    const c = new Float32Array(count * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
      // Random points in a sphere
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.cbrt(Math.random()) * 2.2;
      
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
      
      // Interpolate colors between brand blue and purple
      if (Math.random() > 0.4) {
        color.set('#2563eb'); // Brand Blue
      } else {
        color.set('#7c72ff'); // Brand Purple
      }
      
      color.toArray(c, i * 3);
    }
    return [p, c];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export function Particles3D() {
  return (
    <div className="absolute inset-0 w-full h-full mix-blend-screen pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
        <ParticleCloud />
      </Canvas>
    </div>
  );
}
