import React, { useState, useEffect } from 'react';
import FittingStats from './FittingStats.jsx';

import { avgStarScores, ratingPercentage, recommendationRate } from './helperFns/helper.js';
import Stars from './Stars.jsx';
import RatingBreakdownBar from './RatingBreakdownBar.jsx';
import RatingBreakdownBarCSS from './cssModule_Reviews/RatingBreakdownBar.module.css';



const Ratings = (props) => {
  // console.log('in ratings:', props.ratingObj);
  let ratingsObj = props.ratingObj;
  // let len = Object.keys(ratingsObj);
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

  const [selectedFilter, setSelectedFilter] = useState({
    '5': false,
    '4': false,
    '3': false,
    '2': false,
    '1': false

  });


  const toggleFilterSelection = (e) => {
    let clickedRating = e.currentTarget.id.split('-')[1];
    console.log('clicked rating:', clickedRating);
    setSelectedFilter(prevSelectedFilter => ({ ...prevSelectedFilter, [clickedRating]: !prevSelectedFilter[clickedRating] }));

  }

  useEffect(() => {
      props.passRatingFilter(selectedFilter);
  }, [selectedFilter])


 const resetFilter = () => {
    setSelectedFilter({
      '5': false,
      '4': false,
      '3': false,
      '2': false,
      '1': false

    })
  }

  return (
    <div className="rating-panel">
      {/* <h3>Rating Breakdown and Characteristics</h3>
      <h3>Ratings display for product_id: {props.currentMetaReview.product_id}</h3> */}


      <div id="rating-container">
        <div className="rantingBreakdown">

          {avgStars > 0
            ? <div>
              <div className={RatingBreakdownBarCSS.box2}>
                <span style={{ 'fontSize': '40px', 'fontFamily': 'Arial' }}><b>{avgStars}</b></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Stars percent={percent} />
              </div>
              <br />
              <br />
              <div>{recommendRate}% of reviews recommend this product</div>
              <br />


            </div>



            : <div><h2>This product has no ratings yet</h2></div>


          }





          <div className={RatingBreakdownBarCSS.barsBox}>
            {props.hasFilter
              ? <div className={RatingBreakdownBarCSS.filterMsg}>
                <span><i>Displaying reviews with highlighted ratings</i></span>
                <br />
                <a href='null' onClick={e => {props.removeFilterClick(e); resetFilter(); }}>Remove all filters</a>
                <br />
                <br />

                 </div>
              : null

            }




            <div
              className={RatingBreakdownBarCSS.box}
              id='box-5'
              onClick={toggleFilterSelection}
              style={{ background: selectedFilter['5'] ? "yellow" : null }}

            >
              <u>5 ★:</u> <RatingBreakdownBar percentage={percentage5} />
              {ratingsObj['5'] ? ratingsObj['5'] : 0}

            </div>

            <div className={RatingBreakdownBarCSS.box} id='box-4'
              onClick={toggleFilterSelection}
              style={{ background: selectedFilter['4'] ? "yellow" : null }}>
              <u>4 ★:</u> <RatingBreakdownBar percentage={percentage4} />
              {ratingsObj['4'] ? ratingsObj['4'] : 0}

            </div>
            <div className={RatingBreakdownBarCSS.box} id='box-3'
              onClick={toggleFilterSelection}
              style={{ background: selectedFilter['3'] ? "yellow" : null }}
            >
              <u>3 ★:</u> <RatingBreakdownBar percentage={percentage3} />
              {ratingsObj['3'] ? ratingsObj['3'] : 0}

            </div>
            <div className={RatingBreakdownBarCSS.box} id='box-2'
              onClick={toggleFilterSelection}
              style={{ background: selectedFilter['2'] ? "yellow" : null }}
            >
              <u>2 ★:</u> <RatingBreakdownBar percentage={percentage2} />
              {ratingsObj['2'] ? ratingsObj['2'] : 0}

            </div>
            <div className={RatingBreakdownBarCSS.box} id='box-1'
              onClick={toggleFilterSelection}
              style={{ background: selectedFilter['1'] ? "yellow" : null }}

            >
              <u>1 ★:</u> <RatingBreakdownBar percentage={percentage1} />
              {ratingsObj['1'] ? ratingsObj['1'] : 0}

            </div>


          </div>

        </div>
        <FittingStats currentMeta={props.currentMetaReview} />
      </div>





















    </div>
  );
};

export default Ratings;