import React from 'react';


const FittingStats = (props) => {
  console.log(props.currentMeta);
  console.log(typeof(props.currentMeta));
  return (
    <div className="fitting-stats">
      <h5>Size</h5>
      <span>too small=====     perfect =====    too large</span>



      <h5>Comfort</h5>
      <span>Poor=========     perfect</span>


    </div>
  );
};

export default FittingStats;