import React, { useEffect, useState } from "react";
import "../stationInfo.css";

import RatingStars from "../../../common/components/RatingStars";
import { sendRequest } from "../../../tools/request/request";

const StationsInfo = ({ stationInfo }) => {
  const [facilities, setFacilities] = useState([]);

  const getFacilities = async () => {
    const res = await sendRequest("GET", `/facilities/${stationInfo.id}`);
    const data = await res.data;
    setFacilities(data);
  };

  useEffect(() => {
    getFacilities();
  }, [stationInfo]);

  return (
    <>
      <div className="flex column gap stationInfo-section1">
        <div className="flex row">
          <h3 className="text-primary text-mg-right">Location: </h3>
          <h3>{stationInfo.location}</h3>
        </div>
        <div className="flex row">
          <h3 className="text-primary text-mg-right">Operating Hours: </h3>
          <h3>
            {stationInfo.operating_hour_from} till{" "}
            {stationInfo.operating_hour_to}
          </h3>
        </div>
        <div className="flex row small-gap">
          <h3 className="text-primary text-mg-right">Facilities: </h3>
          {facilities.map((f, i) => (
            <h3 key={i}>{`${f.name},`}</h3>
          ))}
        </div>
      </div>
      <div className="flex column justify-between align-center stationInfo-section2">
        <h3 className="text-primary">Rating</h3>
        <RatingStars rating={stationInfo.rating} />
        <h3>Service Status:</h3>
        <h3 className="bold text-green">{stationInfo.status}</h3>
      </div>
    </>
  );
};

export default StationsInfo;
