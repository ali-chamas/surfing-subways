import React, { useState, useEffect } from "react";
import axios from "axios";
import RatingStars from "../../../common/components/RatingStars";
import { IoMdTrash } from "react-icons/io";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {

        const response = await axios.get("/reviews/1"); 

        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="flex column w-full gap p">
      <h2>My Reviews</h2>
      <div className="self-center w-full flex column gap msg-container">
        {reviews.map((review) => (
          <div
            className="flex justify-between bg-primary p border-radius"
            key={review.id}
          >
            <div className="flex column gap">
              <h2>{review.name}</h2>
              <RatingStars rating={review.rating} />
              <p>{review.message}</p>
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
