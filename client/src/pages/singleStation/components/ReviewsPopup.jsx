import React, { useState } from "react";

import Reviews from "./Reviews";
import AddReviewPopup from "./AddReviewPopup";

const ReviewsPopup = ({
  review,
  setOpenReviewPopup,
  ride,
  getReviews,
  getRides,
  getStation,
}) => {
  const [openAddReviewPopup, setOpenAddReviewPopup] = useState(false);

  return (
    <div className="popup">
      {openAddReviewPopup && (
        <AddReviewPopup
          getRides={getRides}
          ride={ride}
          getReviews={getReviews}
          review={review}
          setOpenAddReviewPopup={setOpenAddReviewPopup}
          getStation={getStation}
        />
      )}

      <div className="flex column align-center popup-child bg-default border-radius gap p">
        <div className="flex row gap align-center">
          <h1 className="text-primary letter-spacing">REVIEWS</h1>
          <i className="icon-review-orange"></i>
        </div>

        <div className="flex column w-full mg gap">
          {review.length > 0 ? (
            review.map((rev, i) => <Reviews review={rev} key={i} />)
          ) : (
            <div className="flex column gap align-center">
              <h2>No reviews yet</h2>
              <p>be the first the reviewer!</p>
            </div>
          )}
        </div>

        <p
          onClick={() => {
            setOpenReviewPopup(false);
          }}
          className="exit cursor-pointer bold"
        >
          X
        </p>

        <p
          onClick={() => {
            setOpenAddReviewPopup(true);
          }}
          className="add cursor-pointer bg-secondary text-black bold"
        >
          ADD
        </p>
      </div>
    </div>
  );
};

export default ReviewsPopup;
