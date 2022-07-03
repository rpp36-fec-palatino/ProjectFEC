import React from 'react';
import AnswerPhoto from './AnswerPhoto.jsx';

const Answer = (props) => {
  var photos = props.answer.photos;
  return (
    <div className='answer'>
      <p>A: {props.answer.body}</p>
      {photos.map((item) => {
        <AnswerPhoto link={item.url}/>;
      })}
      <p>by {props.answer.answerer_name} {props.answer.date}  | Helpful? <a href="url">Yes</a>({props.answer.helpfulness}) | <a href="url">Report</a></p>
    </div>
  )
}

export default Answer;