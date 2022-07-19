import React from 'react';
import Question from './Question.jsx';

const QuestionsList = (props) => {
  return (
    <div className='questions-list'>
      {props.results.map((item) => {
        return (
          <Question key={item.question_id} qAndA={item} helpfulQ={props.helpfulQ} productName={props.productName}/>
        );
      })}
    </div>
  );
};

export default QuestionsList;