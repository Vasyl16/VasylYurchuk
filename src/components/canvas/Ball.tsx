import React, { Suspense } from 'react';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import CanvasLoader from '../Loader';

type BallCanvasProps = {
  icon: string;
};

const Ball: React.FC<BallCanvasProps> = ({ icon }) => {
  const [decal] = useTexture([icon]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={'#fff8eb'}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<BallCanvasProps> = ({ icon }) => {
  return (
    <>
      <Canvas
        frameloop="always"
        gl={{ preserveDrawingBuffer: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball icon={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
};

export default BallCanvas;
