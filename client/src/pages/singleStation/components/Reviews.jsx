import React from 'react'
import RatingStars from "../../../common/components/RatingStars";

const Reviews = ({review}) => {
  return (
    <div className='flex row justify-between w-full'>
            <div>
              <h2>{review.name}</h2>
              <p>{review.desc}</p>
            </div>
            <div className="flex column align-center">
              <h3 className="text-primary">Rating</h3>
              <RatingStars rating={review.rating} />
            </div>
    </div>
  )
}

export default Reviews
