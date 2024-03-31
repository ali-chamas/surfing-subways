import React from "react";
import "../styles/stationRide.css";

import RatingStars from "./RatingStars";

const StationsRide = ({stationRide}) => {
  return (
    <div className="flex row justify-between w-full bg-black stationRide-card">
      <div className="flex column gap stationRide-section1">
        <div className="flex row">
          <h3 className="text-primary text-mg-right">From</h3>
          <h3>{stationRide.departureStation}</h3>
          <h3 className="text-primary text-mg-right">to</h3>
          <h3>{stationRide.arrivalStation}</h3>
        </div>
        <div className="flex row">
        <h3 className="text-primary text-mg-right">Departure:</h3>
          <h3>{stationRide.departureTime}</h3>
          <h3 className="text-primary text-mg-right">Arrival:</h3>
          <h3>{stationRide.arrivalTime}</h3>
        </div>
      </div>
      <div className="flex column align-center stationRide-section2">
      <h3 className="text-primary">Rating</h3>
        <RatingStars rating={stationRide.rating} />
      </div>
      <div className="flex column center gap stationRide-section3">
        <button className="bg-default flex justify-between align-center bold text-white">View Reviews <i className="icon-review"></i></button>
        <button className="bg-default flex justify-between align-center bold text-primary">Buy a Ticket <i className="icon-ticket bg-secondary"></i></button>
      </div>
    </div>
  )
}

export default StationsRide
