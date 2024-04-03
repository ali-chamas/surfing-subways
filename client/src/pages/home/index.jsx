import React, { useContext } from "react";
import "./style.css";
import Recommendations from "./components/Recommendations";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="flex column gap">
      <Hero />
      <Recommendations />
      <Contact />
    </div>
  );
};

export default App;
