import React, { useContext, useEffect, useState } from "react";

import DashboardTable from "../../../common/components/DashboardTable";
import { StationContext } from "../../../context/stationsContext";
import { sendRequest } from "../../../tools/request/request";
import { UserContext } from "../../../context/userContext";
const MyRides = () => {
  const { stations } = useContext(StationContext);
  const { user } = useContext(UserContext);

  const [isChanged, setIsChanged] = useState(false);
  const [chosenStation, setChosenStation] = useState(2);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [price, setPrice] = useState(0);
  const [myStation, setMyStation] = useState({});
  const [rides, setRides] = useState([]);
  const [tickets, setTickets] = useState([]);

  const handleSetters = (setter, value) => {
    setter(value);
    setIsChanged(true);
  };
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    for (let i = 0; i < stations.length; i++) {
      if (stations[i].user_id === user.id) {
        setMyStation(stations[i]);
        break;
      }
    }
  }, [stations.length]);

  useEffect(() => {
    getRides();
  }, [myStation]);

  const myHeaders = [
    "arrival_station",
    "departure_time",
    "arrival_time",
    "price",
    "action",
  ];

  const getTickets = async (rideID) => {
    const res = await sendRequest("GET", `/ticket/${rideID}`);
    return res.data;
  };

  const handleUpdate = async (e, ride) => {
    const reqBody = {
      ride_id: ride.id,
      status: e.target.value,
    };
    const tickets = await getTickets(ride.id);

    tickets.map(async (ticket) => {
      const res = await sendRequest("POST", `/ticket/${ticket.id}`, reqBody);
      console.log(reqBody);
      console.log(ticket);
      console.log(res);
    });
  };
  const getRides = async () => {
    try {
      const res = await sendRequest("GET", `/stationRides/${myStation.id}`);
      console.log(res);
      if (res.status == 200 && res.data.length > 0) {
        setRides(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const identifyStationName = (id) => {
    for (let i = 0; i < stations.length; i++) {
      if (stations[i].id == id) return stations[i].name;
    }
  };

  const handleAdd = async () => {
    const reqBody = {
      departure_station_id: myStation.id,
      arrival_station_id: chosenStation,
      arrival_time: arrival,
      departure_time: departure,
      price: price,
    };
    try {
      const res = await sendRequest("POST", "/rides", reqBody);
      console.log(res);
      getRides();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex column w-full gap p">
      <h2>My Rides</h2>
      <div className="flex column big-gap w-full  align-center">
        <form className="flex gap column ">
          <h2>Add a ride</h2>
          <div className="flex column small-gap ">
            <label htmlFor="">arrival station</label>
            <select
              className="input"
              onChange={(e) => handleSetters(setChosenStation, e.target.value)}
            >
              {stations.map((station, i) => (
                <option key={i} value={station.id}>
                  {station.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex column small-gap">
            <label htmlFor="">departure time</label>
            <input
              type="time"
              className="input"
              onChange={(e) => handleSetters(setDeparture, e.target.value)}
            />
          </div>
          <div className="flex column small-gap">
            <label htmlFor="">arrival time</label>
            <input
              type="time"
              className="input"
              onChange={(e) => handleSetters(setArrival, e.target.value)}
            />
          </div>
          <div className="flex column small-gap">
            <label htmlFor="">price</label>
            <input
              type="number"
              className="input"
              onChange={(e) => handleSetters(setPrice, e.target.value)}
            />
          </div>
          <button
            disabled={!isChanged}
            type="button"
            className="bg-secondary btn-style save-btn"
            onClick={handleAdd}
          >
            Save Changes
          </button>
        </form>
        <div className="p gap flex column bg-primary border-radius">
          <h2>Rides</h2>
          <DashboardTable
            headers={myHeaders}
            body={
              rides.length > 0 &&
              rides.map((ride, i) => (
                <tr>
                  <td>{identifyStationName(ride.arrival_station_id)}</td>
                  <td>{identifyStationName(ride.departure_station_id)}</td>
                  <td>{ride.arrival_time}</td>
                  <td>{ride.price}</td>

                  <td>
                    <select
                      onChange={(e) => {
                        handleUpdate(e, ride);
                      }}
                    >
                      <option value="pending">pending</option>
                      <option value="arrived">arrived</option>
                    </select>
                  </td>
                </tr>
              ))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MyRides;
