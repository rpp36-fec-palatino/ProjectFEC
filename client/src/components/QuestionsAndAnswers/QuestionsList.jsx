import React from 'react';
import Question from './Question.jsx';
import style from './styles/QuestionList.module.css';

const QuestionsList = (props) => {
  return (
    <div className={style.questionListMain}>
      <div className={style.questionListScroller}>
        {props.results.map((item) => {
          return (
            <Question key={item.question_id} qAndA={item} helpfulQ={props.helpfulQ} productName={props.productName} addAns={props.addAns}/>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsList;