import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx';
import style from './styles/QuestionsAndAnswers.module.css';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';

const Question = (props) => {
  const [sellerAnswer] = useState(Object.values(props.qAndA.answers).filter(item => item.answerer_name === 'Seller'));
  const [answers, setAnswers] = useState(sellerAnswer.concat(Object.values(props.qAndA.answers).sort((a, b) => (b.helpfulness - a.helpfulness)).filter(item => item.answerer_name !== 'Seller')));
  const [answerCount, setAnswerCount] = useState(2);
  const [currentAnswers, setCurrentAnswers] = useState(answers.slice(0, answerCount));
  const [displayAddAnswer, setDisplayAddAnswer] = useState(false);
  const [helpfulVote, setHelpfulVote] = useState(false);
  const [helpfulNumber, setHelpfulNumber] = useState(props.qAndA.question_helpfulness);
  const totalAnswers = answers.length;
  const helpfulUrl = '/qa/questions/' + props.qAndA.question_id + '/helpful';

  if (answerCount === totalAnswers && answerCount > 2) {
    return (
      <div className={style.question} id="question">
        <h3 className={style.questionHelpAdd} id="questionTitle">Q: {props.qAndA.question_body}</h3> <h4 className={style.voteAdd}> Helpful? <a id="helpfulQuestionVote" href="#0" onClick={() => { if (!helpfulVote) { props.helpfulQ(helpfulUrl); setHelpfulNumber(helpfulNumber + 1); setHelpfulVote(current => !current); } }}>Yes</a> ({helpfulNumber}) | <a id="addAnswerButton" className={style.questionHelpAdd} href="#0" onClick={() => { setDisplayAddAnswer(current => !current); }}>Add Answer</a></h4>
        {displayAddAnswer ? <AddAnswer addAns={props.addAns} productName={props.productName} questionBody={props.qAndA.question_body} questionId={props.qAndA.question_id} cancel={() => setDisplayAddAnswer(current => !current)}/> : null}
        {currentAnswers.map((item) => {
          return (
            <Answer key={item.id} answer={item} helpful={props.helpfulQ}/>
          );
        })}
        <button id="collapseAnswers" onClick={() => {
          setCurrentAnswers(answers.slice(0, answerCount - 1));
          setAnswerCount(answerCount - 1);
        }}>Collapse answers</button>
      </div>
    );
  }
  if (answerCount > 2 && answerCount < totalAnswers) {
    return (
      <div className={style.question} id="question">
        <h3 className={style.questionHelpAdd} id="questionTitle">Q: {props.qAndA.question_body}</h3> <h4 id="helpfulText" className={style.voteAdd}> Helpful? <a id="helpfulQuestionVote" href="#0" onClick={() => { if (!helpfulVote) { props.helpfulQ(helpfulUrl); setHelpfulNumber(helpfulNumber + 1); setHelpfulVote(current => !current); } }}>Yes</a> ({helpfulNumber}) | <a id="addAnswerButton" className={style.questionHelpAdd} href="#0" onClick={() => { setDisplayAddAnswer(current => !current); }}>Add Answer</a></h4>
        {displayAddAnswer ? <AddAnswer addAns={props.addAns} productName={props.productName} questionBody={props.qAndA.question_body} questionId={props.qAndA.question_id} cancel={() => setDisplayAddAnswer(current => !current)}/> : null}
        {currentAnswers.map((item) => {
          return (
            <Answer key={item.id} answer={item} helpful={props.helpfulQ} />
          );
        })}
        <button id="loadAnswers" onClick={() => {
          setAnswerCount(answerCount + 1);
          setCurrentAnswers(answers.slice(0, answerCount + 1));
        }}>Load more answers</button>
        <button id="collapseAnswers" onClick={() => {
          setCurrentAnswers(answers.slice(0, answerCount - 1));
          setAnswerCount(answerCount - 1);
        }}>Collapse answers</button>
      </div>
    );
  }
  if (answerCount < totalAnswers) {
    return (
      <div className={style.question} id="question">
        <h3 className={style.questionHelpAdd} id="questionTitle">Q: {props.qAndA.question_body}</h3> <h4 id="helpfulText" className={style.voteAdd}> Helpful? <a id="helpfulQuestionVote" href="#0" onClick={() => { if (!helpfulVote) { props.helpfulQ(helpfulUrl); setHelpfulNumber(helpfulNumber + 1); setHelpfulVote(current => !current); } }}>Yes</a> ({helpfulNumber}) | <a id="addAnswerButton" className={style.questionHelpAdd} href="#0" onClick={() => { setDisplayAddAnswer(current => !current); }}>Add Answer</a></h4>
        {displayAddAnswer ? <AddAnswer addAns={props.addAns} productName={props.productName} questionBody={props.qAndA.question_body} questionId={props.qAndA.question_id} cancel={() => setDisplayAddAnswer(current => !current)}/> : null}
        {currentAnswers.map((item) => {
          return (
            <Answer key={item.id} answer={item} helpful={props.helpfulQ} />
          );
        })}
        <button id="loadAnswers" onClick={() => {
          setAnswerCount(answerCount + 1);
          setCurrentAnswers(answers.slice(0, answerCount + 1));
        }}>Load more answers</button>
      </div>
    );
  }

  return (
    <div className={style.question} id="question">
      <h3 className={style.questionHelpAdd} id="questionTitle">Q: {props.qAndA.question_body}</h3> <h4 id="helpfulText" className={style.voteAdd}> Helpful? <a id="helpfulQuestion" href="#0" onClick={() => { if (!helpfulVote) { props.helpfulQ(helpfulUrl); setHelpfulNumber(helpfulNumber + 1); setHelpfulVote(current => !current); } }}>Yes</a> ({helpfulNumber}) | <a id="addAnswer" className={style.questionHelpAdd} href="#0" onClick={() => { setDisplayAddAnswer(current => !current); }}>Add Answer</a></h4>
      {displayAddAnswer ? <AddAnswer addAns={props.addAns} productName={props.productName} questionBody={props.qAndA.question_body} questionId={props.qAndA.question_id} cancel={() => setDisplayAddAnswer(current => !current)}/> : null}
      {/* {sellerAnswer.length ? <Answer key={sellerAnswer[0].id} answer={sellerAnswer[0]} helpful={props.helpfulQ}/> : null} */}
      {currentAnswers.map((item) => {
        return (
          <Answer key={item.id} answer={item} helpful={props.helpfulQ} />
        );
      })}
    </div>
  );
};

export default Question;