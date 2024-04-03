import React from "react";
import RatingStars from "../../../common/components/RatingStars";
import { IoMdTrash } from "react-icons/io";
const MyReviews = () => {
  const fakeReviews = [
    { id: 1, userName: "dsds", rating: 4, review: "dsdsad ds dsa " },
    { id: 1, userName: "dsds", rating: 4, review: "dsdsad ds dsa " },
    { id: 1, userName: "dsds", rating: 4, review: "dsdsad ds dsa " },
  ];
  return (
    <div className="flex column w-full gap p">
      <h2>My Reviews</h2>
      <div className="self-center w-full flex column gap msg-container">
        {fakeReviews.map((r, i) => (
          <div
            className="flex justify-between bg-primary p border-radius"
            key={i}
          >
            <div className="flex column gap">
              <h2>{r.userName}</h2>
              <RatingStars rating={r.rating} />
              <p>{r.review}</p>
            </div>
            <h2 className="text-danger cursor-pointer">
              <IoMdTrash />
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
