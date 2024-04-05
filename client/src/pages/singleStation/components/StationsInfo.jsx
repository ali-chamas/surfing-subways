import React, { useEffect, useState } from "react";
import "../stationInfo.css";

import RatingStars from "../../../common/components/RatingStars";
import { sendRequest } from "../../../tools/request/request";

const StationsInfo = ({ stationInfo, facilities }) => {
  return (
    <div className="flex w-full p justify-between info-container">
      <div className="flex column gap stationInfo-section1">
        <div className="flex row">
          <b className="text-primary text-mg-right">Location: </b>
          <b>{stationInfo.location}</b>
        </div>
        <div className="flex row">
          <b className="text-primary text-mg-right">Operating Hours: </b>
          <b>
            {stationInfo.operating_hour_from} till{" "}
            {stationInfo.operating_hour_to}
          </b>
        </div>
        <div className="flex row small-gap">
          <b className="text-primary text-mg-right">Facilities: </b>
          {facilities.map((f, i) => (
            <b key={i}>{`${f.name},`}</b>
          ))}
        </div>
      </div>
      <div className="flex column justify-between align-center stationInfo-section2">
        <b className="text-primary">Rating</b>
        <RatingStars rating={stationInfo.rating} />
        <b>Service Status:</b>
        <b className="bold text-green">{stationInfo.status}</b>
      </div>
    </div>
  );
};

export default StationsInfo;
