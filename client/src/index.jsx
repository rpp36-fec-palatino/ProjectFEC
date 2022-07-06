import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import ProductOverview from './components/ProductOverview/index.jsx';
import RelatedProductsAndOutfits from './components/RelatedProductsAndOutfits/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <ProductOverview />
        <RelatedProductsAndOutfits />
        <QuestionsAndAnswers />
        <RatingsAndReviews />

      </div>

    );
  }
}




/*****Edit to make it compatible with latest react version**********/
ReactDOM.createRoot(document.getElementById('app')).render(<App />);
