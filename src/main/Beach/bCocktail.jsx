import React from "react";
import beachCocktail from "./beach-cocktail.jpg";
import "./beachCocktail.css";

const BeachPic = () => {
  return (
    <div>
      <img src={beachCocktail} className="beachCocktail" />
      <span className="text-over">Keolu Beer</span>
    </div>
  );
};

export default BeachPic;
