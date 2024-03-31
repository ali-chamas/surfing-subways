import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div>
        <div className="flex column gap align-center p">
          <h1 className="special-font h1-size">Surfing Subways</h1>
          <p>Navigate from one station to another with comfort and ease</p>
          <a
            href="#recommended-stations"
            className="btn-style bg-secondary text-black"
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
