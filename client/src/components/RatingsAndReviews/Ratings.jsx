import React from 'react';
import ScoreAndStarbars from './ScoreAndStarbars.jsx';
import FittingStats from './FittingStats.jsx';

const Ratings = (props) => {
  return (
    <div className="rating-panel">
      <h3>sample data display for product_id: {props.currentMetaReview.product_id}</h3>

      <ScoreAndStarbars currentMetaReview = {props.currentMetaReview}/>

      <FittingStats />






    </div>
  );
};

export default Ratings;