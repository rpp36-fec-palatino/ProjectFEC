import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import AddNewReviewModal from './AddNewReviewModal.jsx';
import ReviewsListCSS from './cssModule_Reviews/ReviewsList.module.css';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';
import { FaSearch } from 'react-icons/fa';


class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: this.props.sortingKeyword,
      addReviewSeen: false,
      currentSearch: ''

    };

  }

  componentDidMount() {
    this.setState({
      currentFilter: this.props.sortingKeyword

    });

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.sortingKeyword !== prevProps.sortingKeyword) {
      this.componentDidMount();

    }

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

  handleDropdownSelection(e) {
    this.props.dropdownSelection(e);
    this.setState({
      currentFilter: this.props.sortingKeyword

    });
  }

  addDefaultSrc(e) {
    e.target.src = '/img/invalid_url.gif';
    e.target.onClick = null;
  }

  searchOnChange(e) {
    if (e.target.value.length >= 3) {
      console.log('current search:', e.target.value);

      this.setState({currentSearch: e.target.value});

      this.props.passSearchKeyword(e.target.value);

    } else {
      this.setState({currentSearch: ''});
      this.props.passSearchKeyword('');

    }
  }



  render() {
    return (
      <WithTrackerHOC eventName={'ReviewList'}>
        <Wrapper>
          <div className={ReviewsListCSS.reviewListMain} id='review-list-main'>
            <h2>Reviews List</h2>
            <div id='search-form' className={ReviewsListCSS.box}>
              <FaSearch />

              <input onChange ={e => this.searchOnChange(e)} id='search-input' className={ReviewsListCSS.searchForm} type="text" name="search" placeholder="Search reviews by keywords here...">

              </input>
            </div>
            <br />


            {this.props.currentReviews.length
              ? <div className={ReviewsListCSS.sortSelect} >
                {this.state.currentSearch
                  ? <div> {this.props.afterSearch.length} reviews, sorted by </div>
                  : <div> {this.props.currentReviews.length} reviews, sorted by </div>


                }
                &nbsp;&nbsp;
                <select id='dropdown-menu' data-testid='select' value={this.state.currentFilter} onChange={this.handleDropdownSelection.bind(this)} >
                  <option value="relevant" name="Relevant">Relevant</option>
                  <option value="newest" data-testid="select-newest">Newest</option>
                  <option value="helpful" data-testid="select-helpful">Helpful</option>
                </select>
              </div>
              : null
            }


            <br />
            <hr
              style={{
                'background': 'grey',
                'color': 'grey',
                'borderColor': 'white',
                'height': '1px',
                'marginRight': '35px'
              }}/>

            {this.props.currentReviews.length === 0
              ? <div style={{ 'fontSize': '20px'}}>No review to display!
                <br />
                <br />
              </div>


              : <div className={ReviewsListCSS.reviewScroller} >
                {this.props.currentDisplayReviews.map(
                  review => <ReviewEntry
                    key={review.review_id}
                    review={review}
                    addDefaultSrc={this.addDefaultSrc.bind(this)}
                    removeReportedReview = {this.props.removeReportedReview}
                    refresh = {this.props.refresh}

                  />
                )}
              </div>

            }



            {/* conditional rendering when there are more than 2 reviews */}
            {(this.props.currentReviews.length > 2 && this.props.loadMore)
              ? <button id='load-more-btn' onClick={this.handleLoadMoreClick.bind(this)}>MORE REVIEWS</button>
              : null
            }

            <button data-testid="popModal" id='add-new-review-btn' onClick={this.handleAddReviewClick.bind(this)}>ADD A NEW REVIEW +</button>

            {this.state.addReviewSeen
              ? <AddNewReviewModal
                currentName={this.props.currentProductName}
                handleCancelClick={this.handleCancelClick.bind(this)}
                currentMeta={this.props.currentMetaReview}
                currentProductId = {this.props.currentProductId}
                refresh = {this.props.refresh}

              />
              : null}





          </div>

        </Wrapper>
      </WithTrackerHOC>

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