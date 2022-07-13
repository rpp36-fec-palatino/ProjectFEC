
import React from 'react';
import axios from 'axios';

class HelpfulAndReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      helpfulCount: 0,

      voted: false


    };
  }

  componentDidMount () {
    this.setState({
      helpfulCount: this.props.count,

    });

  }


  voteYesClick(e) {
    let updatedVote = this.state.helpfulCount + 1;
    let currentReviewId = e.currentTarget.id.split('-')[0];
    axios.put(`/reviews/${currentReviewId}/helpful`)
      .then(response => {
        console.log('Successful update helpful vote!');
        this.setState({
          helpfulCount: updatedVote,
          voted: true

        });
      }).catch(err => {
        console.log('Err update helpful vote');
      });


  }


  render() {
    return (
      <div className="review-entry-footer">
        <span >Helpful?</span>
        {!this.state.voted
          ? <button
            id={this.props.reviewId + '-yes'}
            onClick={e => this.voteYesClick(e)}
          >Yes({this.state.helpfulCount})</button>
          : <button
            id={this.props.reviewId + '-yes'}
          >Yes({this.state.helpfulCount})</button>

        }

        <button id={this.props.reviewId + '-report'}>Report</button>
      </div>
    );
  }

}

export default HelpfulAndReport;