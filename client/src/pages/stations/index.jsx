import React, { useEffect, useState } from "react";
import "./style.css";
import { TbCoinFilled } from "react-icons/tb";

import StationsCard from "../../common/components/StationsCard";
import StationsMap from "./components/StationsMap";
import { sendRequest } from "../../tools/request/request";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { StationContext } from "../../context/stationsContext";

const Stations = () => {
  const { stations } = useContext(StationContext);
  const [filteredStations, setFilteredStations] = useState([]);
  const { user } = useContext(UserContext);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    searchValue == ""
      ? setFilteredStations(stations)
      : setFilteredStations(
          stations.filter((s) => s.name.toLowerCase().includes(searchValue))
        );
    console.log(e.target.value);
  };

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    filterValue == ""
      ? setFilteredStations(stations)
      : setFilteredStations(stations.sort((a, b) => a.rating > b.rating));
  };
  useEffect(() => {
    setFilteredStations(stations);
  }, [stations.length]);

  return (
    <section className="stations-section flex column  align-center">
      <div className="map-wrap">
        <StationsMap stations={stations} />
      </div>

      <div className="flex justify-between bg-primary small-gap p border-radius w-full">
        <div className="flex gap">
          <input
            type="search"
            className="input"
            placeholder="Search "
            onChange={(e) => {
              handleSearch(e);
            }}
          />

          <select
            className="w-full bg-secondary border-radius"
            onChange={(e) => handleFilter(e)}
          >
            <option value="top rated">high rated</option>
            <option value="low rated">low rated</option>
          </select>
        </div>
        {user && (
          <p className="bg-secondary text-black border-radius flex align-center small-gap">
            {user.coins} <TbCoinFilled />
          </p>
        )}
      </div>

      {filteredStations.length > 0
        ? filteredStations.map((station, i) => (
            <StationsCard station={station} key={i} />
          ))
        : "No stations found"}
    </section>
  );
};

export default Stations;
