import React, { useState } from "react";
import { stations } from "../../home/components/Recommendations";
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

  return (
    <div className="flex column w-full gap p">
      <h2>My Rides</h2>
      <div className="flex column gap w-full  align-center">
        <form className="flex gap column ">
          <h2>Add a ride</h2>
          <div className="flex column small-gap ">
            <label htmlFor="">arrival station</label>
            <select
              className="input"
              onChange={(e) => handleSetters(setChosenStation, e.target.value)}
            >
              {allStations.map((station, i) => (
                <option value={station.id}>{station.name}</option>
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
      </div>
    </div>
  );
};

export default MyRides;
