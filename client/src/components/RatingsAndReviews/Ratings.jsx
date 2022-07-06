import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import FittingStats from './FittingStats.jsx';

const Ratings = (props) => {
  return (
    <div className="rating-panel">
      <h3>Ranting Breakdown and Fitting stats</h3>
      <h3>sample data display for product_id: {props.currentMetaReview.product_id}</h3>

      <RatingBreakdown currentMetaReview = {props.currentMetaReview}/>

      <FittingStats />

    </div>
  );
};

export default Ratings;