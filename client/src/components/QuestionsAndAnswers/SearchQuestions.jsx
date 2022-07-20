import React from 'react';
import style from './styles/SearchQuestions.module.css';

class SearchQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className={style.search}>
        <form className={style.form} onSubmit={event.preventDefault()} role="search">
          <input className={style.input} id="search" type="search" placeholder="Have a question? Search for answers..." autoFocus required />
        </form>
      </div>
    );
  }
}

export default SearchQuestions;