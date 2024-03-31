import React from "react";
import "./style.css";
import { TbCoinFilled } from "react-icons/tb";
import { stations } from "../home/components/Recommendations";
import StationsCard from "../../common/components/StationsCard";
const Stations = () => {
  return (
    <section className="stations-section flex column  align-center">
      <div className="map"></div>

      <div className="flex justify-between bg-primary small-gap p w-full">
        <div className="flex gap">
          <input
            type="search"
            className="text-black border-radius"
            placeholder="Search "
          />

          <select className="w-full bg-secondary border-radius">
            <option value="top rated">high rated</option>
            <option value="low rated">low rated</option>
          </select>
        </div>
        <p className="bg-secondary text-black border-radius flex align-center small-gap">
          50 <TbCoinFilled />
        </p>
      </div>

      {stations.map((station, i) => (
        <StationsCard station={station} key={i} />
      ))}
    </section>
  );
};

export default Stations;
