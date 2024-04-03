import React, { useState } from "react";
import { stations } from "../../home/components/Recommendations";
import DashboardTable from "../../../common/components/DashboardTable";
const MyTickets = () => {
  const [allRides, setAllRides] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [chosenRide, setChosenRide] = useState(stations[0].id);
  const [date, setDate] = useState("");

  const handleSetters = (setter, value) => {
    setter(value);
    setIsChanged(true);
  };

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
          <h2>Add a ticket</h2>
          <div className="flex column small-gap ">
            <label htmlFor="">ride</label>
            <select
              className="input"
              onChange={(e) => handleSetters(setChosenRide, e.target.value)}
            >
              {allRides.map((station, i) => (
                <option key={i} value={station.id}>
                  {station.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex column small-gap">
            <label htmlFor="">Date</label>
            <input
              type="date"
              className="input"
              onChange={(e) => handleSetters(setDate, e.target.value)}
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
            body={[].map((ride, i) => (
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

export default MyTickets;
