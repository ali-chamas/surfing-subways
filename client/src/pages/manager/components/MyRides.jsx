import React, { useState } from "react";
import { stations } from "../../home/components/Recommendations";
import DashboardTable from "../../../common/components/DashboardTable";
const MyRides = () => {
  const [allStations, setStations] = useState(stations);
  const [isChanged, setIsChanged] = useState(false);
  const [chosenStation, setChosenStation] = useState(stations[0].id);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [price, setPrice] = useState(0);

  const handleSetters = (setter, value) => {
    setter(value);
    setIsChanged(true);
  };

  const rides = [
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
    {
      arrival: "dsdsa",
      deap_time: "10.00",
      arr_time: "20.00",
      price: 22,
    },
  ];

  const myHeaders = [
    "arrival_station",
    "departure_time",
    "arrival_time",
    "price",
    "action",
  ];

  console.log();
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
              {allStations.map((station, i) => (
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
          >
            Save Changes
          </button>
        </form>
        <div className="p gap flex column bg-primary border-radius">
          <h2>Rides</h2>
          <DashboardTable
            headers={myHeaders}
            body={rides.map((ride, i) => (
              <tr>
                <td>{ride.arr_time}</td>
                <td>{ride.deap_time}</td>
                <td>{ride.price}</td>
                <td>{ride.arrival}</td>
                <td>
                  <button className="btn-style">Edit</button>
                </td>
              </tr>
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default MyRides;
