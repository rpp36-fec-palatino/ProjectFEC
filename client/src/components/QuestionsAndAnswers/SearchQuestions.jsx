import React from 'react';

const SearchQuestions = (props) => {
  return (
    <div className='search-questions'>
      <form>
        <label for="search-questions">Search Questions</label>
        <input type="text" id="search-questions" name="search-questions"></input>
      </form>
    </div>
  )
}

export default SearchQuestions;