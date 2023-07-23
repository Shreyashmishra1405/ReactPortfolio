import { OrbitControls, Preload, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
const Computer = () => {
  return (
    <Canvas frameloop="demand" shadows style={{ height: "100%" }}>
      <Stage environment="city" intensity={0.6} rotateX={0.5}>
      </Stage>
      <OrbitControls
      minPolarAngle={Math.PI/3}
      maxPolarAngle={Math.PI/2}
      autoRotate
        enableZoom={false}
      />
      <Preload all />
    </Canvas>
  );
};

export default Computer;
