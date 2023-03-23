import React from "react";
import "./Navbar.scss";

export default function Navbar({ menu, setMenu }) {
  return (
    <div className={"Navbar " + (menu && "active ")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
          <i className="fa-solid fa-satellite"></i>          </a>
          <div className="itemcontainer">
            <i className="fa-solid fa-user fa-2x"></i>
            <a href="#contact"><span>Contact Me</span></a>
          </div>
          <div className="itemcontainer">
            <i className="fa-solid fa-envelope fa-2x"></i>
            <span>@mishrashreyash63@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenu(!menu)}>
            <span className="l1"> </span>
            <span className="l2"></span>
            <span className="l3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
