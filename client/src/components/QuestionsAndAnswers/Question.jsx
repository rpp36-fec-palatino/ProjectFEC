import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx';
import style from './styles/QuestionsAndAnswers.module.css';

const Question = (props) => {
  const [answers, setAnswers] = useState(Object.values(props.qAndA.answers));
  const [answerCount, setAnswerCount] = useState(2);
  const [currentAnswers, setCurrentAnswers] = useState(answers.slice(0, answerCount));
  const [displayAddAnswer, setDisplayAddAnswer] = useState(false);
  const [helpfulVote, setHelpfulVote] = useState(false);
  const [helpfulNumber, setHelpfulNumber] = useState(props.qAndA.question_helpfulness);
  const totalAnswers = answers.length;
  const helpfulUrl = '/qa/questions/' + props.qAndA.question_id + '/helpful';


  if (answerCount < totalAnswers) {
    return (
      <div className='question'>
        <h3 className={style.questionHelpAdd}>Q: {props.qAndA.question_body} Helpful? <a href="#0" onClick={() => { if (!helpfulVote) { props.helpfulQ(helpfulUrl); setHelpfulNumber(helpfulNumber + 1); setHelpfulVote(current => !current); } }}>Yes</a>({helpfulNumber}) | <a className={style.questionHelpAdd} href="#0" onClick={() => { setDisplayAddAnswer(current => !current); }}>Add Answer</a></h3>
        {displayAddAnswer ? <AddAnswer productName={props.productName} questionBody={props.qAndA.question_body} questionId={props.qAndA.question_id} cancel={() => setDisplayAddAnswer(current => !current)}/> : null}
        {currentAnswers.map((item) => {
          return (
            <Answer key={item.id} answer={item} helpful={props.helpfulQ}/>
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
      <h3 className={style.questionHelpAdd}>Q: {props.qAndA.question_body} Helpful? <a href="#0" onClick={() => { if (!helpfulVote) { props.helpfulQ(helpfulUrl); setHelpfulNumber(helpfulNumber + 1); setHelpfulVote(current => !current); } }}>Yes</a>({helpfulNumber}) | <a className={style.questionHelpAdd} href="#0" onClick={() => { setDisplayAddAnswer(current => !current); }}>Add Answer</a></h3>
      {displayAddAnswer ? <AddAnswer productName={props.productName} questionBody={props.qAndA.question_body} questionId={props.qAndA.question_id} cancel={() => setDisplayAddAnswer(current => !current)}/> : null}
      {currentAnswers.map((item) => {
        return (
          <Answer key={item.id} answer={item} helpful={props.helpfulQ}/>
        );
      })}
    </div>
  );
};

export default Question;