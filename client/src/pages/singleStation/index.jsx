import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Hero2 from "./components/Hero2";
import Info from "./components/Info";
import Rides from "./components/Rides";
import { useParams } from "react-router-dom";
import { StationContext } from "../../context/stationsContext";
import { sendRequest } from "../../tools/request/request";
import Loader from "../../common/components/Loader";
import { FaMessage } from "react-icons/fa6";
import Chatpopup from "./components/Chatpopup";
import { UserContext } from "../../context/userContext";
const App = () => {
  const id = useParams().id;
  const { stations } = useContext(StationContext);
  const { token } = useContext(UserContext);
  const [thisStation, setThisStation] = useState({});
  const [stationRides, setStationRides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [facilities, setFacilities] = useState([]);
  const [openChat, setOpenChat] = useState(false);
  const getRides = async () => {
    const res = await sendRequest("GET", `/stationRides/${id}`);
    setStationRides(res.data);
    setLoading(false);
  };

  const getStation = async () => {
    const res = await sendRequest("GET", `/stations/${id}`);
    setThisStation(res.data);
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
      <Rides
        station={thisStation}
        getRides={getRides}
        stationRides={stationRides}
        getStation={getStation}
      />
      <div
        className="chat-btn bg-secondary text-black large-font flex center cursor-pointer"
        onClick={() => {
          token && setOpenChat(true);
        }}
      >
        <FaMessage />
      </div>
      {openChat && (
        <Chatpopup setOpen={setOpenChat} managerID={thisStation.user_id} />
      )}
    </div>
  );
};

export default App;
