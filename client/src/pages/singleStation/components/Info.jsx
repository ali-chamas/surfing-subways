import React from "react";
import StationsInfo from "./StationsInfo";

const Info = ({ station }) => {
  return (
    <section className="flex row justify-between w-full cairo-text stationInfo-section">
      <StationsInfo stationInfo={station} />
    </section>
  );
};

export default Info;
