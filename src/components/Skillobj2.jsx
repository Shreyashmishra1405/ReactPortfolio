import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Skillobj2 = ({name}) => {


  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={0.4} />
      <directionalLight position={[0,0,6]}  />
      <mesh>
        <sphereGeometry args={[2]} />
        <meshStandardMaterial >
        <RenderTexture attach="map" >
          <PerspectiveCamera 
          makeDefault
          position={[0,0,9]}/>
        <color attach="background" args={["pink"]} />
        <Text fontSize={1} color="black">
          {name}
        </Text>
        </RenderTexture>
        </meshStandardMaterial>
      </mesh>
    </Canvas>
  );
};

export default Skillobj2;
