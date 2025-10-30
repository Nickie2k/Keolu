import React from "react";
import Header from "./main/Header/Header.jsx";
import MyHeader from "./main/myHeader/myHeader.jsx";
import ShopSection from "./main/ShopSection/ShopSection.jsx";
import "./index.css";
import BeachPic from "./main/Beach/bCocktail.jsx";

function App() {
  return (
    <div>
      <Header />
      <MyHeader />
      <BeachPic />
      <ShopSection />
    </div>
  );
}

export default App;
