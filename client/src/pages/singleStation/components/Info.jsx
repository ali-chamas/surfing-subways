import React from "react";
import StationsInfo from "./StationsInfo";

const Info = ({ station, facilities }) => {
  return (
    <section className="flex row justify-between w-full cairo-text stationInfo-section">
      <StationsInfo stationInfo={station} facilities={facilities} />
    </section>
  );
};

export default Info;
