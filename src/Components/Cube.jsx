import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";

function Cube() {
  const textRef = useRef();

  useFrame(
    (state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 3)
  );
  return (
    <mesh>
      <boxGeometry />
      {/* <meshStandardMaterial color="red"> */}
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={2} color="#555">
            Esam
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default Cube;
