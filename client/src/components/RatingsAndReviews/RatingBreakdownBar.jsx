import React from 'react';
import RatingBreakdownBarCSS from './cssModule_Reviews/RatingBreakdownBar.module.css';

const RatingBreakdownBar = (props) => {

  return (
    <div className={RatingBreakdownBarCSS.container}>
      <div className={RatingBreakdownBarCSS.filler} style={{width: + props.percentage + '%'}}>
        <span>{`${props.percentage}%`}</span>
      </div>


    </div>
  );

};


export default RatingBreakdownBar;