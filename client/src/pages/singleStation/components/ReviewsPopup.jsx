import React, { useState } from "react";

import Reviews from './Reviews'

const ReviewsPopup = ({review, setOpenReviewPopup}) => {

  const [openAddReviewPopup, setOpenAddReviewPopup] = useState(false);

  return (
    <div className='popup'>
      
      {openAddReviewPopup && <ReviewsPopup review={review} setOpenReviewPopup={setOpenReviewPopup}/>}

      <div className='flex column align-center popup-child bg-default border-radius gap p'>
        <div className='flex row gap align-center'>
          <h1 className='text-primary'>REVIEWS</h1>
          <i className="icon-review-orange"></i>
        </div>
        <div className='flex column w-full mg gap'>
        {review.map((rev, i) => (
          <Reviews review={rev} key={i}/>
        ))}
        </div>

        <p onClick={()=>{
          setOpenReviewPopup(false);
        }} className='exit cursor-pointer bold'>X</p>

        <p onClick={()=>{
          setOpenReviewPopup(false);
          setOpenAddReviewPopup(true);
        }} className='add cursor-pointer bg-secondary text-black bold'>ADD</p>

      </div>
    </div>
  )
}

export default ReviewsPopup
