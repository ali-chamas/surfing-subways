import React, { useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
const RatingStars = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<IoIosStar />);
    } else if (i === Math.floor(rating) && rating % 1 !== 0) {
      stars.push(<IoIosStarHalf />);
    } else {
      stars.push(<IoIosStarOutline />);
    }
  }

  return (
    <div className="flex small-gap">
      {stars.map((star, i) => (
        <p key={i}>{star}</p>
      ))}
    </div>
  );
};

export default RatingStars;
