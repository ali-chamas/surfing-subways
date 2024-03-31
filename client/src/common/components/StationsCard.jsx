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
          <div className="flex column gap">
            <h3>{station.title}</h3>
            <RatingStars rating={station.rating} />
            <p>{station.location}</p>
            <div className="flex small-gap">
              {station.facilitites.map((f, i) => (
                <p key={i}>{f}</p>
              ))}
            </div>
          </div>
          <a
            href={`/singleStation/${station.id}`}
            className="btn-style bg-secondary text-black"
          >
            View station
          </a>
        </div>
      </div>
    </div>
  );
};

export default StationsCard;
