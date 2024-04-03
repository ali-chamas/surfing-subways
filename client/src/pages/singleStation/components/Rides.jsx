import React, { useEffect, useState } from "react";
import StationsRide from "./StationsRide";
import { sendRequest } from "../../../tools/request/request";

const Rides = ({ station }) => {
  const [stationRides, setStationRides] = useState([]);

  const getRides = async () => {
    const res = await sendRequest("GET", `/stationRides/${station.id}`);
    setStationRides(res.data);
  };
  useEffect(() => {
    getRides();
  }, [station]);

  return (
    <section className="flex column justify-between cairo-text stationRide-section gap">
      {stationRides.map((stationRide, i) => (
        <StationsRide stationRide={stationRide} station={station} key={i} />
      ))}
    </section>
  );
};

export default Rides;
