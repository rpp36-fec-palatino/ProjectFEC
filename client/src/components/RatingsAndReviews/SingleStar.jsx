import React from 'react';
import { FaStar } from 'react-icons/fa';


let SingleStar = ({ filled, onClick }) => {
  return (
    <FaStar
      color={filled ? 'orange' : 'lightgray'}
      size="25px"
      onClick={onClick} />
  );
};

export default SingleStar;