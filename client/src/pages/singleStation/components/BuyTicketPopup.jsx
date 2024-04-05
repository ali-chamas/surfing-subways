import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { sendRequest } from "../../../tools/request/request";
import { ToastContainer, toast } from "react-toastify";
const BuyTicketPopup = ({
  setOpenBuyTicketPopup,
  station,
  arrival,
  stationRide,
}) => {
  const { user, updateUser } = useContext(UserContext);
  const [type, setType] = useState("one-ride");

  const handlePurchase = async () => {
    try {
      if (user) {
        const reqBody = {
          type: type,
          price: stationRide.price,
          departure_station_id: station.id,
        };
        const res = await sendRequest(
          "POST",
          `users/${user.id}/rides/${stationRide.id}/purchase`,
          reqBody
        );
        console.log(res);

        updateUser();
        toast("purchased!");
      } else {
        toast("please login");
      }
    } catch (error) {
      toast("not enough coins or station not active");
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
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
                  <h3 className="text-primary text-mg-right">
                    Arrival Station:
                  </h3>
                  <h3>{arrival}</h3>
                </div>
                <div className="flex row">
                  <h3 className="text-primary text-mg-right">
                    Departure Time:
                  </h3>
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
              <select
                onChange={(e) => setType(e.target.value)}
                vlue={type}
                className="input"
              >
                <option value="one-ride">one-ride</option>
                <option value="multi-rides">multi-rides</option>
              </select>

              <div className="flex justify-between">
                <div className="flex row">
                  <h3 className="text-primary text-mg-right">PRICE:</h3>
                  <h3>{stationRide.price}</h3>
                  <h3 className="text-primary text-mg-right">Coins</h3>
                </div>
                <p
                  className="add-rev cursor-pointer bg-secondary text-black bold border-radius flex center mg-top"
                  onClick={handlePurchase}
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
    </>
  );
};

export default BuyTicketPopup;
