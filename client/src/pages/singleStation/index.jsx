import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Hero2 from "./components/Hero2";
import Info from "./components/Info";
import Rides from "./components/Rides";
import { useParams } from "react-router-dom";
import { StationContext } from "../../context/stationsContext";

const App = () => {
  const id = useParams().id;
  const { stations } = useContext(StationContext);
  const [thisStation, setThisStation] = useState({});
  useEffect(() => {
    stations.length > 0 &&
      stations.map((station) => {
        station.id == id && setThisStation(station);
      });
  }, [stations.length]);

  return (
    <div className="flex column gap">
      <Hero2 station={thisStation} />
      <Info station={thisStation} />
      <Rides station={thisStation} />
    </div>
  );
};

export default App;
