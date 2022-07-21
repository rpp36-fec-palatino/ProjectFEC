import React from 'react';
import ReviewEntryCSS from './cssModule_Reviews/ReviewEntry.module.css';

const Stars = (props) => {

  return (
    <div className={ReviewEntryCSS.containerdiv} id='star-display'>
      <div>
        <img style={{'maxWidth': '100px' }} src="/img/stars_blank.png" alt="blank-stars" />
      </div>
      <div className={ReviewEntryCSS.cornerimage} style={{'width': + props.percent + '%'}}>
        <img id="review-stars" style={{'maxWidth': '100px' }} src="/img/stars_full.png" alt="filled-stars" />
      </div>
    </div>




  );

};





export default Stars;