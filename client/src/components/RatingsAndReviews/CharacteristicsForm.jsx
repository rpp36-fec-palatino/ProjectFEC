import React, { useState } from 'react';

import AddNewReviewModalCSS from './cssModule_Reviews/AddNewReviewModal.module.css';

const CharacteristicsForm = (props) => {



  let charLabels = {
    'Size': {
      '1': 'A size too small',
      '2': '½ a size too small',
      '3': 'Perfect',
      '4': '½ a size too big',
      '5': 'A size too wide'
    },
    'Width': {
      '1': 'Too narrow',
      '2': 'Slightliy narrow',
      '3': 'Perfect',
      '4': 'Slightly wide',
      '5': 'Too wide',
    },
    'Comfort': {
      '1': 'Uncomfortable',
      '2': 'Slightliy uncomfortable',
      '3': 'Ok',
      '4': 'Comfortable',
      '5': 'Perfect',
    },
    'Quality': {
      '1': 'Poor',
      '2': 'Below average',
      '3': 'What I expected',
      '4': 'Pretty great',
      '5': 'Perfect',
    },
    'Length': {
      '1': 'Runs Short',
      '2': 'Runs slightly short',
      '3': 'Perfect',
      '4': 'Runs slightly long',
      '5': 'Runs Long',
    },
    'Fit': {
      '1': 'Runs tight',
      '2': 'Runs slightly tight',
      '3': 'Perfect',
      '4': 'Runs slightly long',
      '5': 'Runs Long',
    }


  };

  const [selected, setSelected] = useState({
    Size: '',
    Width: '',
    Comfort: '',
    Quality: '',
    Length: '',
    Fit: '',
  });

  const changeSelection = (e) => {
    setSelected((prevSelected) => ({ ...prevSelected, [e.target.name]: e.target.value }));
    console.log('whats in e.target: ', e.target.name, e.target.value);
  };




  return (
    <div id="AddNewReviewModal-characteristicsForm" >
      <span><b>Characteristics * </b></span>
      <div className={AddNewReviewModalCSS.characteristicsForm}>
        {Object.keys(props.currentMeta.characteristics).map(
          (charKey, index) => {
            return (
              <div key={charKey + '-' + index} >
                <div id="characteristicsBox">



                  <div className={AddNewReviewModalCSS.box1}>
                    <div><b>{charKey}</b></div>
                    <div>{': '}</div>
                  &nbsp;&nbsp;
                    <div id="radio-selections">
                      {Object.keys(charLabels[charKey]).map((ratingKey) => (
                        <span key={charKey + ratingKey + '-span'}>
                          <label key={charKey + ratingKey}>
                            {ratingKey}
                          </label>
                          <input id={'addNewReviewModal-radio-' + charKey + ratingKey} type="radio" name={charKey} value={ratingKey} onChange={changeSelection}>

                          </input>


                        </span>


                      ))}


                    </div>

                    <div id="selectedMsg">
                      {selected[charKey]
                        ? <i>{charLabels[charKey][selected[charKey]]}</i>
                        : 'none selected'}
                    </div>

                  </div>



                </div>

              </div>

            );
          }

        )}

      </div>


    </div>



  );







};















export default CharacteristicsForm;