import React from 'react';
import SingleStar from './SingleStar.jsx';
import { useState } from 'react';


let AddStarRating = ({onChange}) => {
  const msg = {
    '1': 'Poor',
    '2': 'Fair',
    '3': 'Average',
    '4': 'Good',
    '5': 'Great'

  };

  const [rating, setRating] = useState(0);
  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <SingleStar
          key={value}
          filled={value <= rating}
          onClick={() => setRating(value)}
        />
      ))}
      {'   '}
      <span>{msg[rating + '']}</span>
    </div>

  );
};
export default AddStarRating;