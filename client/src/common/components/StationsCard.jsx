import React, { useEffect, useState } from "react";
import "../styles/stationsCard.css";

import RatingStars from "./RatingStars";
import { sendRequest } from "../../tools/request/request";
const StationsCard = ({ station }) => {
  const [facilities, setFacilities] = useState([]);

  const getFacilities = async () => {
    const res = await sendRequest("GET", `/facilities/${station.id}`);
    const data = await res.data;
    setFacilities(data);
  };

  useEffect(() => {
    getFacilities();
  }, []);
  return (
    <div
      className="station-card"
      style={{ backgroundImage: `url(${station.image})` }}
    >
      <div className="station-card-info flex">
        <div className=" flex justify-between p w-full align-center">
          <div className="flex column small-gap">
            <div className="flex center gap">
              <h3>{station.name}</h3>
              <RatingStars rating={station.rating} />
            </div>
            <p>{station.location}</p>
            <div className="flex small-gap">
              {facilities.map((f, i) => (
                <p key={i}>{f.name}</p>
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
