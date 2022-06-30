import React from 'react';
import {avgStarScores} from './helperFns/helper.js';


const ScoreAndStarbars = (props) => {

  let recommended = Number(props.currentMetaReview.recommended['true']);
  let notRecommend = Number(props.currentMetaReview.recommended['false']);
  let recommendRate = Math.round((recommended / (recommended + notRecommend)) * 100);
  let avgStars = avgStarScores(props.currentMetaReview.ratings);

  return (
    <div className="score-starbars">
      <h3>{avgStars} ******(Star rating bar)</h3>
      <span>{recommendRate}% of reviews recommend this product</span>



      <li>5 stars: {props.currentMetaReview.ratings['5']}</li>
      <li>4 stars: {props.currentMetaReview.ratings['4']}</li>
      <li>3 stars: {props.currentMetaReview.ratings['3']}</li>
      <li>2 stars: {props.currentMetaReview.ratings['2']}</li>
      <li>1 stars: {props.currentMetaReview.ratings['1']}</li>




    </div>
  );
};

export default ScoreAndStarbars;