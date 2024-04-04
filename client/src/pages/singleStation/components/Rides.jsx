import React, { useEffect, useState } from "react";
import StationsRide from "./StationsRide";
import { sendRequest } from "../../../tools/request/request";

const Rides = ({ station, stationRides }) => {
  return (
    <section className="flex column justify-between cairo-text stationRide-section gap">
      {stationRides.map((stationRide, i) => (
        <StationsRide stationRide={stationRide} station={station} key={i} />
      ))}
    </section>
  );
};

export default Rides;
