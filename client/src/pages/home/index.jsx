import React from "react";
import "./style.css";

const App = () => {
  return (
    <section className="hero-section">
      <div>
        <div className="flex column gap align-center p">
          <h1 className="special-font h1-size">Surfing Subways</h1>
          <p>Navigate from one station to another with comfort and ease</p>
          <a
            href="#recommended-stations"
            className="btn-style bg-secondary text-white"
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
};

export default App;
