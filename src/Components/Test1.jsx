import React from "react";
import "./Test1.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import Cube from "./Cube";
function Test() {
  return (
    <div className="test">
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Cube/>
      </Canvas>
    </div>
  )
}

export default Test;
