import React from 'react';

const AnswerPhoto = (props) => {
  var photo = props.link;
  return (
    <div className='answerPhoto'>
      <img src={photo} width="250" height="250"></img>
    </div>
  );
};

export default AnswerPhoto;