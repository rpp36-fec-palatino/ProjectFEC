import React from 'react';
import style from './styles/SearchQuestions.module.css';

var SearchQuestions = (props) => (
  <div className={style.search}>
    <form className={style.form} onSubmit={event.preventDefault()} role="search">
      <input className={style.input} id="search" type="search" onChange={props.onSearch} placeholder="Have a question? Search for answers..." autoFocus required />
    </form>
  </div>
);

export default SearchQuestions;