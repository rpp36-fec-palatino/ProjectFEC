
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

  reportBtnClick(e) {
    console.log('report btn clicked!');
    let reviewId = e.currentTarget.id.split('-')[0];
    axios.put(`/reviews/${reviewId}/report`)
      .then(response => {
        console.log(`review ${reviewId} has been reported! You should not see it in the list anymore!`);
      }).catch(err => console.log('Err report the review!'));

    this.props.removeReportedReview(reviewId);
    this.props.refresh();

  }


  render() {
    return (
      <div className="review-entry-footer">
        <span >Helpful?</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {!this.state.voted
          ? <a
            href=''
            id={this.props.reviewId + '-yes'}
            onClick={e => { e.preventDefault(); this.voteYesClick(e); }}
          >Yes({this.state.helpfulCount})</a>
          : <a
            href=''
            id={this.props.reviewId + '-yes'}
          >Yes({this.state.helpfulCount})</a>

        }
        &nbsp;&nbsp;

        {' | '}
        &nbsp;&nbsp;

        <a href='' data-testid='voteHelpful' id={this.props.reviewId + '-report'} onClick = {e => { e.preventDefault(); this.reportBtnClick(e); }}>  Report</a>
      </div>
    );
  }

}

export default HelpfulAndReport;