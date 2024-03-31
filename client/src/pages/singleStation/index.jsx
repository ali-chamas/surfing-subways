import React from "react";
import "./style.css";
import Hero2 from "./components/Hero2";
import Info from "./components/Info";
import Rides from "./components/Rides";

const App = () => {
  return (
    <div className="flex column gap">
      <Hero2 />
      <Info />
      <Rides />
    </div>
  );
};

export default App;
