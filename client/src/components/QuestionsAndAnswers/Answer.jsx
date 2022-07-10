import React, {useState, useEffect} from 'react';
import AnswerPhoto from './AnswerPhoto.jsx';

const Answer = (props) => {
  var photos = props.answer.photos;
  var answerDate = new Date(props.answer.date)
    .toLocaleDateString({}, {timeZone: 'UTC', month: 'long', day: '2-digit', year: 'numeric'});
  const helpfulUrl = '/qa/answers/' + props.answer.id + '/helpful';
  const reportUrl = '/qa/answers/' + props.answer.id + '/report';

  return (
    <div className='answer'>
      <p>A: {props.answer.body}</p>
      {photos.map((item, index) => {
        return (
          <AnswerPhoto key={index} link={item}/>
        );
      })}
      <p>by {props.answer.answerer_name}, {answerDate}  | Helpful? <a href="#0" onClick={() => props.helpful(helpfulUrl)}>Yes</a>({props.answer.helpfulness}) | <a href="#0" onClick={() => props.helpful(reportUrl)}>Report</a></p>
    </div>
  );
};

export default Answer;