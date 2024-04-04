import React, { useEffect, useState } from "react";
import StationsRide from "./StationsRide";
import { sendRequest } from "../../../tools/request/request";

const Rides = ({ station, stationRides, getRides, getStation }) => {
  return (
    <section className="flex column align-center cairo-text stationRide-section gap">
      {stationRides.map((stationRide, i) => (
        <StationsRide
          stationRide={stationRide}
          getStation={getStation}
          getRides={getRides}
          station={station}
          key={i}
        />
      ))}
    </section>
  );
};

export default Rides;
