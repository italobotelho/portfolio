"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

function MovingEnvironment() {
  const gridRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Parâmetros do Grid
  const gridSize = 10;
  const speed = 1.5;

  useFrame((state, delta) => {
    // Animação do grid indo para frente
    if (gridRef.current) {
      gridRef.current.position.z += speed * delta;
      // Loop do grid
      if (gridRef.current.position.z > gridSize) {
        gridRef.current.position.z = gridRef.current.position.z % gridSize;
      }
    }
    
    // Animação das partículas flutuando lentamente
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  // Gerar partículas "Data Nodes" no céu
  const [positions] = useMemo(() => {
    const count = 500;
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 50; // X
      p[i * 3 + 1] = Math.random() * 20;     // Y (apenas acima do grid)
      p[i * 3 + 2] = (Math.random() - 0.5) * 50; // Z
    }
    return [p];
  }, []);

  return (
    <group>
      {/* Grid Principal Cyberpunk */}
      <group ref={gridRef}>
        <Grid 
          position={[0, -2.5, 0]} 
          args={[100, 100]} 
          cellSize={1} 
          cellThickness={1} 
          cellColor="#2563eb" // Neon Blue
          sectionSize={gridSize} 
          sectionThickness={1.5} 
          sectionColor="#7c72ff" // Neon Pink/Purple
          fadeDistance={30} 
          fadeStrength={2} 
        />
      </group>

      {/* Estrelas / Nós de Dados flutuantes */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ffffff" size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
      </Points>
    </group>
  );
}

export function Grid3D() {
  return (
    <div className="absolute inset-0 w-full h-full mix-blend-screen pointer-events-none overflow-hidden z-0">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 1, 5], fov: 60 }}>
        <fog attach="fog" args={['#0d1117', 5, 25]} />
        <MovingEnvironment />
      </Canvas>
      
      {/* Brilho do horizonte central para esconder o ponto de fuga e dar foco */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_50%,_rgba(37,99,235,0.15),_transparent_60%)] pointer-events-none" />
      
      {/* Degradês nas bordas para mesclar perfeitamente com a página */}
      <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-[#0d1117] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#0d1117] via-[#0d1117]/80 to-transparent pointer-events-none" />
    </div>
  );
}
