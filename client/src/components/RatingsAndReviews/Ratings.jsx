import React, { useState, useEffect} from 'react';
// import RatingBreakdown from './RatingBreakdown.jsx';
import FittingStats from './FittingStats.jsx';

import {avgStarScores, ratingPercentage, recommendationRate} from './helperFns/helper.js';
import Stars from './Stars.jsx';
import RatingBreakdownBar from './RatingBreakdownBar.jsx';
import RatingBreakdownBarCSS from './cssModule_Reviews/RatingBreakdownBar.module.css';



const Ratings = (props) => {
  console.log('in ratings:', props.ratingObj);
  let ratingsObj = props.ratingObj;
  let len = Object.keys(ratingsObj);
  let recommendRate = recommendationRate(props.recommended);
  let avgStars = avgStarScores(ratingsObj);
  let percent = Math.round((avgStars / 5) * 100);
  let rantingPercentageObj = ratingPercentage(ratingsObj);
  let ratingPercentageArr = Object.values(rantingPercentageObj);
  let percentage1 = ratingPercentageArr[0];
  let percentage2 = ratingPercentageArr[1];
  let percentage3 = ratingPercentageArr[2];
  let percentage4 = ratingPercentageArr[3];
  let percentage5 = ratingPercentageArr[4];



  return (
    <div className="rating-panel">
      <h3>Ranting Breakdown and Fitting stats</h3>
      <h3>Ratings display for product_id: {props.currentMetaReview.product_id}</h3>

      { len === 0
        ? <div> STILL LOADING....</div>
        : <div id="rating-container">
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
                {ratingsObj['5'] ? ratingsObj['5'] : 0 }

              </div>
              <div className={RatingBreakdownBarCSS.box}>
                <a href='#'>4 stars:</a> <RatingBreakdownBar percentage = {percentage4} />
                {ratingsObj['4'] ? ratingsObj['4'] : 0 }

              </div>
              <div className={RatingBreakdownBarCSS.box}>
                <a href='#'>3 stars:</a> <RatingBreakdownBar percentage = {percentage3} />
                {ratingsObj['3'] ? ratingsObj['3'] : 0 }

              </div>
              <div className={RatingBreakdownBarCSS.box}>
                <a href='#'>2 stars:</a> <RatingBreakdownBar percentage = {percentage2} />
                {ratingsObj['2'] ? ratingsObj['2'] : 0 }

              </div>
              <div className={RatingBreakdownBarCSS.box}>
                <a href='#'>1 stars:</a> <RatingBreakdownBar percentage = {percentage1} />
                {ratingsObj['1'] ? ratingsObj['1'] : 0 }

              </div>


            </div>

          </div>
          <FittingStats currentMeta = {props.currentMetaReview} />
        </div>

      }



















    </div>
  );
};

export default Ratings;