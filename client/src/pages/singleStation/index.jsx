import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Hero2 from "./components/Hero2";
import Info from "./components/Info";
import Rides from "./components/Rides";
import { useParams } from "react-router-dom";
import { StationContext } from "../../context/stationsContext";
import { sendRequest } from "../../tools/request/request";
import Loader from "../../common/components/Loader";

const App = () => {
  const id = useParams().id;
  const { stations } = useContext(StationContext);
  const [thisStation, setThisStation] = useState({});
  const [stationRides, setStationRides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [facilities, setFacilities] = useState([]);

  const getRides = async () => {
    const res = await sendRequest("GET", `/stationRides/${id}`);
    setStationRides(res.data);
    setLoading(false);
  };

  const getStation = () => {
    stations.length > 0 &&
      stations.map((station) => {
        station.id == id && setThisStation(station);
      });
  };

  const getFacilities = async () => {
    const res = await sendRequest("GET", `/facilities/${id}`);
    const data = await res.data;
    setFacilities(data);
  };

  useEffect(() => {
    setLoading(true);
    getStation();
    getFacilities();
    getRides();
  }, [stations.length]);

  console.log(loading);
  return (
    <div className="flex column gap">
      {loading && <Loader />}
      <Hero2 station={thisStation} />
      <Info station={thisStation} facilities={facilities} />
      <Rides station={thisStation} stationRides={stationRides} />
    </div>
  );
};

export default App;
