import React, { useState } from "react";
import "./works.css";
import WebDesign from "./WebDesign";
import Devlopment from "./Devlopment";
import ProductDesign from "./ProductDesign";
export const data = [
  "Web Design",
  "Devlopment",
  "illustration",
  "Product Design",
  "Social Media",
];
function Works() {
  const [work, setwork]= useState("Web Design");
  return (
    <div className="works" id="works">
      <div className="section">
        <div className="continerworks">
          <div className="left">
            <ul className="list">
              {data.map((item)=>{
                return(
                  <li onClick={()=>setwork(item)} key={item} text={item} className="list-item">{item}</li>

                )
              })}
              
            </ul>
          </div>
          <div className="right">
              {work ==="Web Design" ? (<WebDesign/>) : work ==="Devlopment" ? (<Devlopment/>) : <ProductDesign/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
