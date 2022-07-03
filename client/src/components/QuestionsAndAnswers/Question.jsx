import React from 'react';
import Answer from './Answer.jsx';

const Question = (props) => {
  var answers = Object.values(props.qAndA.answers);
  return (
    <div className='question'>
      <h3>Q: {props.qAndA.question_body} Helpful? <a href="url">Yes</a>(25) | <a href="url">Add Answer</a></h3>
      {answers.map((item) => {
        return (
          <Answer key={item.id} answer={item}/>
        );
      })}
      <button>Load more answers</button>
    </div>
  );
};

export default Question;