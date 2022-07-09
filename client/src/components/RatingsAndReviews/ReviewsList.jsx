import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import AddNewReviewModal from './AddNewReviewModal.jsx';
import ReviewsListCSS from './cssModule_Reviews/ReviewsList.module.css';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'relevant', //default;
      addReviewSeen: false

    };

  }

  componentDidMount() {

  }

  handleLoadMoreClick(e) {
    this.props.clickLoadMoreBtn(e);
  }

  handleAddReviewClick(e) {
    this.setState({
      addReviewSeen: true
    });
  }

  handleCancelClick(e) {
    this.setState({
      addReviewSeen: false
    });
  }





  render() {
    return (
      <div className={ReviewsListCSS.reviewListMain}>

        <div className="sort-slect">
          <h2>Reviews List</h2>
          <h3> {this.props.currentReviews.length} reviews, sorted by </h3>
          <select data-testid='select' value={this.state.currentFilter} onChange ={e => { this.setState({currentFilter: e.target.value }); }} >
            <option value="relevant" name="Relevant">Relevant</option>
            <option value="newest" data-testid="select-newest">Newest</option>
            <option value="helpful" data-testid="select-helpful">Helpful</option>
          </select>
        </div>
        <br/>
        {'----------------------------------------------------------------------------------'}

        <div className={ReviewsListCSS.reviewScroller} >
          {this.props.currentDisplayReviews.map(
            review => <ReviewEntry key = {review.review_id} review = {review} />
          )}
        </div>

        {/* conditional rendering when there are more than 2 reviews */}
        {this.props.currentReviews.length > 2 && this.props.loadMore
          ? <button onClick={this.handleLoadMoreClick.bind(this)}>MORE REVIEWS</button>
          : null
        }

        <button data-testid="popModal" onClick={this.handleAddReviewClick.bind(this)}>ADD A NEW REVIEW +</button>

        {this.state.addReviewSeen
          ? <AddNewReviewModal
            currentName = {this.props.currentProductName}
            handleCancelClick = {this.handleCancelClick.bind(this)}
          />
          : null}





      </div>
    );
  }



}



// const ReviewsList = (props) => {
// return (
//   <div className={ReviewsListCSS.reviewListMain}>

//     <div className="sort-slect">
//       <h2>Reviews List</h2>
//       <h3> xxx reviews, sorted by </h3>
//       <select value='relevant' onChange ={e => {}} >
//         <option name="relevant">Relevant</option>
//         <option name="date">Newest</option>
//         <option name="helpful">Helpful</option>
//       </select>
//     </div>
//     <br/>
//     {'--------------------------------------------------------------'}

//     <div className={ReviewsListCSS.reviewScroller} >
//       {props.currentDisplayReviews.map(
//         review => <ReviewEntry key = {review.review_id} review = {review} />
//       )}
//     </div>

//     {/* conditional rendering when there are more than 2 reviews */}
//     {props.currentReviews.length > 2 && props.loadMore
//       ? <button onClick={e => props.clickLoadMoreBtn(e)}>MORE REVIEWS</button>
//       : null
//     }

//     <button onClick={e => props.clickAddReview(e)}>ADD A NEW REVIEW +</button>

//     {props.addReview ? <AddNewReviewModal /> : null}





//   </div>
// );
// };



export default ReviewsList;