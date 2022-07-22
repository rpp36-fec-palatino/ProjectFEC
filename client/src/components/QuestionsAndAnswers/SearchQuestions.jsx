import React from 'react';
import style from './styles/SearchQuestions.module.css';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';

var SearchQuestions = (props) => (
  <WithTrackerHOC eventName={'QuestionsAndAnswers->Search'}>
    <Wrapper>
      <div className={style.search} id="searchComponent">
        <form className={style.form} onSubmit={event.preventDefault()} role="search">
          <input className={style.input} id="search" type="search" onChange={props.onSearch} placeholder="Have a question? Search for answers..." autoFocus required />
        </form>
      </div>
    </Wrapper>
  </WithTrackerHOC>
);

export default SearchQuestions;