import React from 'react';
import Answer from './Answer.jsx';

const Question = (props) => {
  return (
    <div className='question'>
      <h3>Q: Who what which when where why whether how?</h3>
      <Answer/>
    </div>
  )
}

export default Question;