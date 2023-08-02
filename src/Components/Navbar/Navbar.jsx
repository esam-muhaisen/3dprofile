import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import { Link } from "react-router-dom";

function Navbar() {
  // const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="containernav">
        <div className="parent">
          <div className="links">
            <a href="#home"><img className="logo" src={logo} alt="" /></a>
            <ul className="list">
               
              <li className="listitem">
              <a href="#home">Home</a>
                 
                </li>

              <li className="listitem" >
                <a href="#who">ِAbout</a>
                
                </li>
              <li className="listitem">
              <a href="#works">Works</a>
                
                </li>
              <li className="listitem">
              <a href="#contact">Contact</a>
                
                </li>
            </ul>
          </div>
          <div className="icons">
            <img className="icon" src={search} alt="" />
            <button className="button">Mire Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
