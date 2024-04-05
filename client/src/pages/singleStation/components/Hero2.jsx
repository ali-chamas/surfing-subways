import React from "react";

const Hero2 = ({ station }) => {
  return (
    <section
      style={{
        backgroundImage: `url(http://localhost:8000/station_pictures/${station.image})`,
      }}
      className="hero2-section"
    >
      <div>
        <div className="flex column gap align-center p">
          <h1 className="special-font h1-size">{station.name}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
