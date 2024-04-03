import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";

const BuyTicketPopup = ({
  setOpenBuyTicketPopup,
  station,
  arrival,
  stationRide,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="popup">
      <div className="flex column align-center popup-child bg-default border-radius gap p">
        <div className="flex row gap align-center">
          <h1 className="text-primary letter-spacing">BUY A TICKET</h1>
          <i className="icon-review-orange"></i>
        </div>

        <div className="flex column w-full mg gap">
          <div className="flex column justify-between w-full bg-black border-radius p">
            <div>
              <div className="flex row">
                <h3 className="text-primary text-mg-right">
                  Departure Station:
                </h3>
                <h3>{station.name}</h3>
              </div>
              <div className="flex row">
                <h3 className="text-primary text-mg-right">Arrival Station:</h3>
                <h3>{arrival}</h3>
              </div>
              <div className="flex row">
                <h3 className="text-primary text-mg-right">Departure Time:</h3>
                <h3>{stationRide.departure_time}</h3>
              </div>
              <div className="flex row">
                <h3 className="text-primary text-mg-right">Arrival Time:</h3>
                <h3>{stationRide.arrival_time}</h3>
              </div>
            </div>

            <div className="flex column align-end w-full">
              {user && (
                <>
                  <h3 className="text-primary">BALANCE:</h3>
                  <div className="flex row">
                    <h3>{user.coins}</h3>
                    <h3 className="text-primary text-mg-right">Coins</h3>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-between">
              <div className="flex row">
                <h3 className="text-primary text-mg-right">PRICE:</h3>
                <h3>{stationRide.price}</h3>
                <h3 className="text-primary text-mg-right">Coins</h3>
              </div>
              <p
                className="add-rev cursor-pointer bg-secondary text-black bold border-radius flex center mg-top"
                onClick={() => {
                  setOpenBuyTicketPopup(false);
                }}
              >
                PURCHASE
              </p>
            </div>
          </div>
        </div>

        <p
          onClick={() => {
            setOpenBuyTicketPopup(false);
          }}
          className="exit cursor-pointer bold"
        >
          X
        </p>
      </div>
    </div>
  );
};

export default BuyTicketPopup;
