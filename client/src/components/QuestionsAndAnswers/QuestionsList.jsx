import React from 'react';
import Question from './Question.jsx';

const QuestionsList = (props) => {
  return (
    <div className='questions-list'>
      <Question/>
      <Question/>
    </div>
  )
}

export default QuestionsList;