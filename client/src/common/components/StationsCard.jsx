import React from "react";
import "../styles/stationsCard.css";

import RatingStars from "./RatingStars";
const StationsCard = ({ station }) => {
  return (
    <div
      className="station-card"
      style={{ backgroundImage: `url(${station.image})` }}
    >
      <div className="station-card-info flex">
        <div className=" flex justify-between p w-full align-center">
          <div className="flex column small-gap">
            <h3>{station.title}</h3>
            <RatingStars rating={station.rating} />
            <p>{station.location}</p>
          </div>
          <a
            href={`/stations?id=${station.id}`}
            className="btn-style bg-secondary text-white"
          >
            View station
          </a>
        </div>
      </div>
    </div>
  );
};

export default StationsCard;
