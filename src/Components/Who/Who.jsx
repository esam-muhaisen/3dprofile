import React from "react";
import "./who.css";
import line from "../../images/line.png";
import moon from "../../images/moon.png";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import Cube from "../Cube";

function Who() {
  return (
    <div className="who" id="who">
      <div className="section">
        <div className="continerwho">
          <div className="medule">
            <div className="right-part">
              {/* 3d model */}
              {/* <img src={moon} alt="" /> */}
              <Canvas camera={{fov:25, position:[5,5,5]}}>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Cube/>
              </Canvas>
              
            </div>
            <div className="left-part">
              <h1 className="title-left">Think outside the square space</h1>
              <div className="whatwedo">
                <img src={line} alt="" />
                <h2 className="subtitle">Who we are</h2>
              </div>
              <p>
                a creative group of designers and developers with a passion for
                the arts
              </p>
              <button className="btn">See our works</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Who;
