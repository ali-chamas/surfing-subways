import React, { useContext, useEffect, useState } from "react";
import "../stationRide.css";

import RatingStars from "../../../common/components/RatingStars";
import ReviewsPopup from "./ReviewsPopup";
import BuyTicketPopup from "./BuyTicketPopup";
import { StationContext } from "../../../context/stationsContext";

const StationsRide = ({ stationRide, station }) => {
  const { stations } = useContext(StationContext);
  const [arrival, setArrival] = useState("");

  useEffect(() => {
    stations.map(
      (s) => s.id == stationRide.arrival_station_id && setArrival(s.name)
    );
  }, [stationRide]);

  const [openReviewPopup, setOpenReviewPopup] = useState(false);
  const [openBuyTicketPopup, setOpenBuyTicketPopup] = useState(false);

  console.log(stationRide);
  return (
    <div className="flex row justify-between w-full bg-black stationRide-card">
      {/* {openReviewPopup && (
        <ReviewsPopup review={review} setOpenReviewPopup={setOpenReviewPopup} />
      )} */}

      {openBuyTicketPopup && (
        <BuyTicketPopup
          station={station}
          stationRide={stationRide}
          arrival={arrival}
          setOpenBuyTicketPopup={setOpenBuyTicketPopup}
        />
      )}

      <div className="flex column gap stationRide-section1">
        <div className="flex row">
          <h3 className="text-primary text-mg-right">From</h3>
          <h3>{station.name}</h3>
          <h3 className="text-primary text-mg-right">to</h3>
          <h3>{arrival}</h3>
        </div>
        <div className="flex row">
          <h3 className="text-primary text-mg-right">Departure:</h3>
          <h3>{stationRide.departure_time}</h3>
          <h3 className="text-primary text-mg-right">Arrival:</h3>
          <h3>{stationRide.arrival_time}</h3>
        </div>
      </div>
      <div className="flex column align-center stationRide-section2">
        <h3 className="text-primary">Rating</h3>
        <RatingStars rating={stationRide.rating} />
      </div>
      <div className="flex column center gap stationRide-section3">
        <button
          className="bg-default flex justify-between align-center bold text-white"
          onClick={() => {
            setOpenReviewPopup(true);
          }}
        >
          View Reviews <i className="icon-review"></i>
        </button>
        <button
          className="bg-secondary flex justify-between align-center bold text-black"
          onClick={() => {
            setOpenBuyTicketPopup(true);
          }}
        >
          Buy a Ticket <i className="icon-ticket bg-secondary"></i>
        </button>
      </div>
    </div>
  );
};

export default StationsRide;
