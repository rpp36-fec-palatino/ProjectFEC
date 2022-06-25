import React from 'react';
import ReactDOM from 'react-dom';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx'

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
    </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));