import React from 'react';
import {avgStarScores, ratingPercentage} from './helperFns/helper.js';
import Stars from './Stars.jsx';
import RatingBreakdownBar from './RatingBreakdownBar.jsx';
import RatingBreakdownBarCSS from './cssModule_Reviews/RatingBreakdownBar.module.css';


const RatingBreakdown = (props) => {

  let recommended = Number(props.currentMetaReview.recommended['true']);
  let notRecommend = Number(props.currentMetaReview.recommended['false']);
  let recommendRate = Math.round((recommended / (recommended + notRecommend)) * 100);
  let avgStars = avgStarScores(props.currentMetaReview.ratings);
  let percent = Math.round((avgStars / 5) * 100);
  let rantingPercentageObj = ratingPercentage(props.currentMetaReview.ratings);
  let ratingPercentageArr = Object.values(rantingPercentageObj);
  let percentage1 = ratingPercentageArr[0];
  let percentage2 = ratingPercentageArr[1];
  let percentage3 = ratingPercentageArr[2];
  let percentage4 = ratingPercentageArr[3];
  let percentage5 = ratingPercentageArr[4];


  return (
    <div className="rantingBreakdown">
      <div>
        <span><h3>{avgStars}</h3></span>
        <Stars percent = {percent}/>
      </div>

      <br />
      <br />
      <div>{recommendRate}% of reviews recommend this product</div>
      <br />

      <div>

        <div className={RatingBreakdownBarCSS.box}>
          <a href='#'>5 stars:</a> <RatingBreakdownBar percentage = {percentage5} />
          {props.currentMetaReview.ratings['5'] ? props.currentMetaReview.ratings['5'] : 0 }

        </div>
        <div className={RatingBreakdownBarCSS.box}>
          <a href='#'>4 stars:</a> <RatingBreakdownBar percentage = {percentage4} />
          {props.currentMetaReview.ratings['4'] ? props.currentMetaReview.ratings['4'] : 0 }

        </div>
        <div className={RatingBreakdownBarCSS.box}>
          <a href='#'>3 stars:</a> <RatingBreakdownBar percentage = {percentage3} />
          {props.currentMetaReview.ratings['3'] ? props.currentMetaReview.ratings['3'] : 0 }

        </div>
        <div className={RatingBreakdownBarCSS.box}>
          <a href='#'>2 stars:</a> <RatingBreakdownBar percentage = {percentage2} />
          {props.currentMetaReview.ratings['2'] ? props.currentMetaReview.ratings['2'] : 0 }

        </div>
        <div className={RatingBreakdownBarCSS.box}>
          <a href='#'>1 stars:</a> <RatingBreakdownBar percentage = {percentage1} />
          {props.currentMetaReview.ratings['1'] ? props.currentMetaReview.ratings['1'] : 0 }

        </div>


      </div>









    </div>
  );
};

export default RatingBreakdown;