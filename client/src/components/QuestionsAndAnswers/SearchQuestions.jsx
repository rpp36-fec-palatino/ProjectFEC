import React from 'react';
import style from './styles/SearchQuestions.module.css';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';
import {FaSearch} from 'react-icons/fa';

var SearchQuestions = (props) => (
  <div className={style.search} id="searchComponent">
    <input className={style.input} id="search" type="search" onChange={props.onSearch} placeholder="Have a question? Search for answers..." autoFocus required />
  </div>
);

export default SearchQuestions;