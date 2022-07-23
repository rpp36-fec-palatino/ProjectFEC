import React from 'react';
import CharacteristicsCSS from './cssModule_Reviews/Characteristics.module.css';






/* data format

"characteristics": {
        "Fit": {
            "id": 240582,
            "value": "3.0869565217391304"
        },
        "Length": {
            "id": 240583,
            "value": "3.0434782608695652"
        },
        "Comfort": {
            "id": 240584,
            "value": "3.0434782608695652"
        },
        "Quality": {
            "id": 240585,
            "value": "3.2608695652173913"
        }
    }

*/


const FittingStats = (props) => {

  let labels = {
    Size: {
      low: 'A size too small',
      mid: 'Perfect',
      high: 'A size too wide',
    },
    Width: {
      low: 'Too narrow',
      mid: 'Perfect',
      high: 'Too wide',
    },
    Comfort: {
      low: 'Poor',
      mid: 'Ok',
      high: 'Perfect',
    },
    Quality: {
      low: 'Poor',
      mid: 'What I expected',
      high: 'Perfect',
    },
    Length: {
      low: 'Runs Short',
      mid: 'Perfect',
      high: 'Runs Long',
    },
    Fit: {
      low: 'Runs tight',
      mid: 'Perfect',
      high: 'Runs Long',
    }


  };


  return (
    <div className = {CharacteristicsCSS.container}>
      {Object.keys(props.currentMeta.characteristics).map(
        key => (
          <div key = {key} className = {CharacteristicsCSS.box1}>

            <div>
              <label id={key + '-label'}>{key}</label>
              <br />
              <input
                className = {CharacteristicsCSS.bar}
                key={key}
                type="range"
                min="1"
                max="5"
                step="0.1"
                disabled
                value={Math.round(props.currentMeta.characteristics[key].value * 1000) / 1000}
              />
              <div className = {CharacteristicsCSS.box2}>
                <div >{labels[key].low}</div>
                <div >{labels[key].mid}</div>
                <div >{labels[key].high}</div>
              </div>
            </div>

          </div>
        )
      )}




    </div>
  );
};

export default FittingStats;