import React, { useContext, useEffect, useState } from "react";
import "../stationRide.css";

import RatingStars from "../../../common/components/RatingStars";
import ReviewsPopup from "./ReviewsPopup";
import BuyTicketPopup from "./BuyTicketPopup";
import { StationContext } from "../../../context/stationsContext";
import { MdOutlineRateReview } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";

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

  return (
    <div className="flex  justify-between w-full bg-black p stationRide-card">
      {openReviewPopup && (
        <ReviewsPopup review={review} setOpenReviewPopup={setOpenReviewPopup} />
      )}

      {openBuyTicketPopup && (
        <BuyTicketPopup
          station={station}
          stationRide={stationRide}
          arrival={arrival}
          setOpenBuyTicketPopup={setOpenBuyTicketPopup}
        />
      )}

      <div className="flex column gap stationRide-section1 w-full">
        <div className="flex ">
          <b className="text-primary text-mg-right">From</b>
          <b>{station.name}</b>
          <b className="text-primary text-mg-right">to</b>
          <b>{arrival}</b>
        </div>
        <div className="flex w-full">
          <b className="text-primary text-mg-right">Departure:</b>
          <b>{stationRide.departure_time}</b>
          <b className="text-primary text-mg-right">Arrival:</b>
          <b>{stationRide.arrival_time}</b>
        </div>
      </div>
      <div className="flex column p stationRide-section2 w-full">
        <b className="text-primary">Rating</b>
        <RatingStars rating={stationRide.rating} />
      </div>
      <div className="flex  center gap stationRide-section3">
        <button
          className="bg-default flex small-gap btn-style flex justify-between align-center bold text-white"
          onClick={() => {
            setOpenReviewPopup(true);
          }}
        >
          View Reviews
          <b className="icons">
            <MdOutlineRateReview />
          </b>
        </button>
        <button
          className="bg-secondary flex small-gap btn-style flex justify-between align-center bold text-black"
          onClick={() => {
            setOpenBuyTicketPopup(true);
          }}
        >
          Buy a Ticket
          <b className="icons">
            <FaTicket />
          </b>
        </button>
      </div>
    </div>
  );
};

export default StationsRide;
