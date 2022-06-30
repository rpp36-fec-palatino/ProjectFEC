import React from 'react';
import Answer from './Answer.jsx';

const Question = (props) => {
  var answer = props.qAndA.answers;
  return (
    <div className='question'>
      <h3>Q: {props.qAndA.question_body}</h3>
      {/* {props.qAndA.answers.map((item) => {
        return (
          <Answer key={item}/>
        );
      })} */}
    </div>
  );
};

export default Question;