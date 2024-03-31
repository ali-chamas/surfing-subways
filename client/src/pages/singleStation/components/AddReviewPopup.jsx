import React, { useState } from 'react'
import axios from "axios";

const AddReviewPopup = ({setOpenAddReviewPopup}) => {

    const [reviews, setReviews] = useState([{message : '', rating: ''}])

  return (
    <div className='popup'>
      <div className='flex column align-center popup-child bg-default border-radius gap p'>

        <div className='flex row justify-between w-full bg-black border-radius p'>
            <div className='flex column center'>
                <h3 className="text-primary letter-spacing">REVIEW</h3>
              <textarea className='bg-default text-white' placeholder='Enter review description...' name="" id="" cols="30" rows="10" onChange={(e)=>{
                setReviews({
                    ...reviews,
                    message: e.target.value,
                })
              }}>
              </textarea>
            </div>
            <div className="flex column align-center justify-between">
                <div className='flex column center'>
                <h3 className="text-primary letter-spacing">RATING</h3>
                <input className='bg-default text-white' placeholder='1 / 5' type='number'min={1}
                max={5} name="" id="" onChange={(e)=>{
                    setReviews({
                        ...reviews,
                        rating: e.target.value,
                    })
                }}/>
                </div>
              
                <p onClick={async()=>{
                    try{
                        const {message , rating} = reviews

                        const response = await axios.post(
                            "",
                            {
                                message,
                                rating,
                            }
                        );
                        if(response.data.status === "success"){
                        setOpenAddReviewPopup(false);
                    }
                    
                    } catch(error){  
                        console.error(error);
                    }
                }} className='add-rev cursor-pointer bg-secondary text-black bold border-radius'>ADD REVIEW</p>
            </div>
            
    </div>

        <p onClick={()=>{
          setOpenAddReviewPopup(false);
        }} className='exit cursor-pointer bold'>X</p>
      </div>
    </div>
  )
}

export default AddReviewPopup
