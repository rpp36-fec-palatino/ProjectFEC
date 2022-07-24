import React from 'react';
import SingleStar from './SingleStar.jsx';
import { useState, useEffect } from 'react';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';


let AddStarRating = ({passStarRating}) => {
  const msg = {
    '1': 'Poor',
    '2': 'Fair',
    '3': 'Average',
    '4': 'Good',
    '5': 'Great'

  };

  const [rating, setRating] = useState(0);
  useEffect(() => {
    passStarRating(rating);
  }, [rating]);

  return (
    <WithTrackerHOC eventName='AddNewReviewModal-index-2'>
      <div id="add-star-rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <SingleStar
            key={value}
            filled={value <= rating}
            onClick={() => setRating(value)}
          />
        ))}
     &nbsp;&nbsp;&nbsp;&nbsp;
        {rating ? <span>{msg[rating + '']}</span> : 'no rating selected'}
      </div>

    </WithTrackerHOC>


  );
};
export default AddStarRating;