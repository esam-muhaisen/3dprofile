import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import line from "../../images/line.png";
import moon from "../../images/moon.png";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
function Hero() {
  return (
    <div className="hero" id="home">
      <div className="section">
        <Navbar />
        <div className="continerhero">
          <div className="medule">
            <div className="left-part">
              <h1 className="title-left">Esam Muhaisen</h1>
              <div className="whatwedo">
                <img src={line} alt="" />
                <h2 className="subtitle">what we do</h2>
              </div>
              <p>We enjoy creating delightful</p>
              <button className="btn">Learn More</button>
            </div>
            <div className="right-part">
              <Canvas camera={{ fov: 25, position: [3.8, 3, 2] }}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={1}>
                  <MeshDistortMaterial
                    color="#3d1c56"
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </Sphere>
              </Canvas>
              <img src={moon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
