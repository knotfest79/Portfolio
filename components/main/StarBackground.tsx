"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

//@ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StarBackground = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref: any = useRef("");

  const [sphere] = useState(() => {
    const arr = new Float32Array(15000); // 5000 points * 3 coords each
    return random.inSphere(arr, { radius: 1.2 });
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false} //
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
export default StarsCanvas;
