import React, { Suspense, useRef } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';

import * as random from 'maath/random/dist/maath-random.cjs';

import { Loader, PointMaterial, Points, Preload } from '@react-three/drei';

const Stars: React.FC = () => {
  const ref = useRef(null);

  const sphere = random.inSphere(new Float32Array(5001), { radius: 1.2 });

  const spherePositions = new Float32Array(sphere);

  useFrame((_, delta) => {
    if (ref.current) {
      //@ts-ignore
      ref.current.rotation.x -= delta / 10;
      //@ts-ignore
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={spherePositions}
        stride={3}
        frustumCulled
        //  {...props}
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<Loader />}>
          <Stars />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
