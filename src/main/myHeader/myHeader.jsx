import React from "react";
import "./myHeader.css";
import uberEatsIcon from "./icons8-uber-eats-app-48.png";
import doorDashIcon from "./doordash.jpeg";

const MyHeader = () => {
  return (
    <header className="my-header-container">
      <div className="my-header-left">
        <h1 className="my-header-brand">🍺 Keolu Beer</h1>
      </div>
      <nav className="my-header-right">
        <a href="#about" className="my-header-link">About</a>
        <a href="#ubereats" className="my-header-link">
          UberEats
          <img src={uberEatsIcon} alt="UberEats" className="my-header-icon" />
        </a>
        <a href="#doordash" className="my-header-link">
          DoorDash
          <img src={doorDashIcon} alt="DoorDash" className="my-header-icon" />
        </a>
      </nav>
    </header>
  );
};

export default MyHeader;