import React from 'react'

import Reviews from './Reviews'

const ReviewsPopup = ({review, setOpenReviewPopup}) => {

  

  return (
    <div className='popup'>
      
      <div className='flex column align-center popup-child bg-primary gap p'>
        <div className='flex row gap align-center'>
          <h1 className='primary-text'>REVIEWS</h1>
          <i className="icon-review"></i>
        </div>
        <div className='flex column w-full gap'>
        {review.map((rev, i) => (
          <Reviews review={rev} key={i}/>
        ))}
        </div>
        <p onClick={()=>{
          setOpenReviewPopup(false);
        }} className='exit cursor-pointer bold'>X</p>


      </div>
    </div>
  )
}

export default ReviewsPopup
