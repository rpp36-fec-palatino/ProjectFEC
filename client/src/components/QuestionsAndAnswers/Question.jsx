import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import style from './styles/QuestionsAndAnswers.module.css';

const Question = (props) => {
  const [answers, setAnswers] = useState(Object.values(props.qAndA.answers));
  const [answerCount, setAnswerCount] = useState(2);
  const [currentAnswers, setCurrentAnswers] = useState(answers.slice(0, answerCount));
  const totalAnswers = answers.length;
  const helpfulUrl = '/qa/questions/' + props.qAndA.question_id + '/helpful';

  if (answerCount < totalAnswers) {
    return (
      <div className='question'>
        <h3 className={style.questionHelpAdd}>Q: {props.qAndA.question_body} Helpful? <a href={helpfulUrl}>Yes</a>({props.qAndA.question_helpfulness}) | <a className={style.questionHelpAdd} href="url">Add Answer</a></h3>
        {currentAnswers.map((item) => {
          return (
            <Answer key={item.id} answer={item}/>
          );
        })}
        <button onClick={() => {
          setAnswerCount(answerCount + 1);
          setCurrentAnswers(answers.slice(0, answerCount + 1));
        }}>Load more answers</button>
      </div>
    );
  }

  return (
    <div className='question'>
      <h3 className={style.questionHelpAdd}>Q: {props.qAndA.question_body} Helpful? <a href={helpfulUrl}>Yes</a>({props.qAndA.question_helpfulness}) | <a className={style.questionHelpAdd} href="url">Add Answer</a></h3>
      {currentAnswers.map((item) => {
        return (
          <Answer key={item.id} answer={item}/>
        );
      })}
    </div>
  );
};

export default Question;