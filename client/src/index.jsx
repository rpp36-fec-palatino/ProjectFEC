import React from 'react';
import ReactDOM from 'react-dom';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/Q&A/QuestionsAndAnswers.jsx';
import ProductOverview from './components/ProductOverview/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount () {
  }

  render () {
    return (
    <div>
      Test
      <RatingsAndReviews />
      <QuestionsAndAnswers />
      <ProductOverview />
    </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));