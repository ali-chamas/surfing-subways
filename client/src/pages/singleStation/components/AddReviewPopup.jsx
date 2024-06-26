import React, { useContext, useState } from "react";
import axios from "axios";
import { sendRequest } from "../../../tools/request/request";
import { UserContext } from "../../../context/userContext";
import { StationContext } from "../../../context/stationsContext";
import { ToastContainer, toast } from "react-toastify";
const AddReviewPopup = ({
  setOpenAddReviewPopup,
  ride,
  getReviews,
  getRides,
  getStation,
}) => {
  const [reviews, setReviews] = useState([{ message: "", rating: "" }]);

  const { user } = useContext(UserContext);

  const { getStations } = useContext(StationContext);

  const addReview = async () => {
    if (user) {
      try {
        const res = await sendRequest(
          "POST",
          `/reviews/${ride.id}/${user.id}`,
          reviews
        );
        console.log(res);
        await getReviews();
        await getRides();
        await getStations();
        await getStation();
        setOpenAddReviewPopup(false);
      } catch (error) {
        console.log(error.response.data.message);
        toast("you should be an on board passenger");
      }
    } else {
      toast("please login first");
    }
  };

  return (
    <div className="popup">
      <ToastContainer />
      <div className="flex column align-center popup-child bg-default border-radius gap p">
        <div className="flex row justify-between w-full bg-black border-radius p">
          <div className="flex column center">
            <h3 className="text-primary letter-spacing">REVIEW</h3>
            <textarea
              className="bg-default text-white"
              placeholder="Enter review description..."
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) => {
                setReviews({
                  ...reviews,
                  message: e.target.value,
                });
              }}
            ></textarea>
          </div>
          <div className="flex column align-center justify-between">
            <div className="flex column center">
              <h3 className="text-primary letter-spacing">RATING</h3>
              <input
                className="bg-default text-white"
                placeholder="1 / 5"
                type="number"
                min={1}
                max={5}
                name=""
                id=""
                onChange={(e) => {
                  setReviews({
                    ...reviews,
                    rating: e.target.value,
                  });
                }}
              />
            </div>

            <p
              onClick={addReview}
              className="add-rev cursor-pointer bg-secondary text-black bold border-radius"
            >
              ADD REVIEW
            </p>
          </div>
        </div>

        <p
          onClick={() => {
            setOpenAddReviewPopup(false);
          }}
          className="exit cursor-pointer bold"
        >
          X
        </p>
      </div>
    </div>
  );
};

export default AddReviewPopup;
