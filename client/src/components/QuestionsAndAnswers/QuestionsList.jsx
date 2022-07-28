import React from 'react';
import Question from './Question.jsx';
import style from './styles/QuestionList.module.css';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';

const QuestionsList = (props) => {
  return (
    <WithTrackerHOC eventName={'QuestionsAndAnswers->QuestionsList'}>
      <Wrapper>
        <div className={style.questionListMain} id="questionsList">
          <div className={style.questionListScroller}>
            {props.results.map((item) => {
              return (
                <Question key={item.question_id} qAndA={item} helpfulQ={props.helpfulQ} productName={props.productName} addAns={props.addAns}/>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </WithTrackerHOC>
  );
};

export default QuestionsList;