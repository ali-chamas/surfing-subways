import React from "react";
import "../stationInfo.css";

import RatingStars from "../../../common/components/RatingStars";

const StationsInfo = ({stationInfo}) => {
  return (
    <>
      <div className="flex column gap stationInfo-section1">
        <div className="flex row">
          <h3 className="text-primary text-mg-right">Manager:</h3>
          <h3>{stationInfo.manager}</h3>
        </div>
        <div className="flex row">
          <h3 className="text-primary text-mg-right">Location: </h3>
          <h3>{stationInfo.location}</h3>
        </div>
        <div className="flex row">
          <h3 className="text-primary text-mg-right">Operating Hours: </h3>
          <h3>{stationInfo.from} till {stationInfo.to}</h3>
        </div>
        <div className="flex row small-gap">
          <h3 className="text-primary text-mg-right">Facilities: </h3>
          {stationInfo.facilitites.map((f, i) => (
                <h3 key={i}>{`${f},`}</h3>
              ))}
        </div>
      </div>
      <div className="flex column justify-between align-center stationInfo-section2">
        <h3 className="text-primary">Rating</h3>
        <RatingStars rating={stationInfo.rating} />
        <h3>Service Status:</h3>
        <h3 className="bold text-green">{stationInfo.serviceStatus}</h3>
      </div>
    </>
  )
}

export default StationsInfo
