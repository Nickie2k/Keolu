import React from "react";
import Header from "./main/Header/Header.jsx";
import MyHeader from "./main/myHeader/myHeader.jsx";
import ImgSlider from "./main/imgSlider/imgSlider.jsx";
import "./index.css";
import BeachPic from "./main/Beach/bCocktail.jsx";

function App() {
  return (
    <div>
      <Header />
      <MyHeader />
      <BeachPic />
      <ImgSlider />
    </div>
  );
}

export default App;
