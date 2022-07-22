import React from 'react';
import css from './styles/imageGallery.module.css';
import MainImage from './MainImage.jsx';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      thumbnailScroll: 0,
      scrollCount: 0,
      toggleScrollUp: 'hidden',
      toggleScrollDown: 'hidden'
    };
    this.renderThumbnails = this.renderThumbnails.bind(this);
    this.scrolldown = this.scrolldown.bind(this);
    this.scrollup = this.scrollup.bind(this);
    this.renderScrollUp = this.renderScrollUp.bind(this);
    this.renderScrollDown = this.renderScrollDown.bind(this);
    this.focusThumbnail = this.focusThumbnail.bind(this);
  }

  componentDidMount () {
    this.renderScrollUp();
    this.renderScrollDown();
    this.focusThumbnail();
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.props.photos !== this.state.photos) {
      this.setState({photos: this.props.photos});
    }
    if (previousState.photos !== this.state.photos || this.state.scrollCount !== previousState.scrollCount) {
      this.renderScrollUp();
      this.renderScrollDown();
    }

    if (previousProps.currentImgIndex !== this.props.currentImgIndex) {
      this.focusThumbnail();
    }
  }

  renderThumbnails (photos) {
    let unique = 0;
    return photos.map((thumbnail) => {
      unique++;
      if (thumbnail.url === this.props.currentImg.url) {
        return (
          <div className={css.thumbnail} key={unique + thumbnail.url} >
            <div className={css.thumbnailSelected}></div>
            <img
              id={unique + thumbnail.url}
              src={thumbnail.thumbnail_url}
              name={thumbnail.url}
              onClick={this.props.changeImage}
            />
          </div>
        );
      } else {
        return (
          <div className={css.thumbnail} key={unique + thumbnail.url} >
            <img
              id={unique + thumbnail.url}
              src={thumbnail.thumbnail_url}
              name={thumbnail.url}
              onClick={this.props.changeImage}
            />
          </div>
        );
      }
    });
  }

  renderScrollUp () {
    if (this.state.scrollCount > 0) {
      this.setState({toggleScrollUp: 'visible'});
    } else {
      this.setState({toggleScrollUp: 'hidden'});
    }
  }

  renderScrollDown () {
    let photosQty = this.state.photos.length;
    if (photosQty > 7 && this.state.scrollCount < photosQty - 7) {
      this.setState({toggleScrollDown: 'visible'});
    } else {
      this.setState({toggleScrollDown: 'hidden'});
    }
  }

  scrolldown () {
    let thumbnailScroll = this.state.thumbnailScroll - 115;
    let scrollCount = this.state.scrollCount;
    scrollCount++;
    this.setState({thumbnailScroll, scrollCount});
    if (this.props.currentImgIndex - scrollCount < 0) {
      this.props.changeImage(null, 'next');
    }
  }

  scrollup () {
    let thumbnailScroll = this.state.thumbnailScroll + 115;
    let scrollCount = this.state.scrollCount;
    scrollCount--;
    this.setState({thumbnailScroll, scrollCount});
    if (this.props.currentImgIndex - 6 > scrollCount) {
      this.props.changeImage(null, 'previous');
    }
  }

  focusThumbnail () {
    let currentImgIndex = this.props.currentImgIndex;
    let scrollCount = this.state.scrollCount;
    let scrollMultiplier;
    if (currentImgIndex > 6 + scrollCount) {
      scrollMultiplier = currentImgIndex - 6 - scrollCount;
    } else if (currentImgIndex < scrollCount) {
      scrollMultiplier = currentImgIndex - scrollCount;
    }
    if (scrollMultiplier) {
      let thumbnailScroll = this.state.thumbnailScroll - 115 * scrollMultiplier;
      let scrollCount = this.state.scrollCount + scrollMultiplier;
      this.setState({thumbnailScroll, scrollCount});
    }
  }

  render () {
    return (
      <div id='ImageGallery' className={css.imageGallery}>
        <WithTrackerHOC eventName={'ProductOverview->ImageGallery->ThumbnailList'}>
          <Wrapper>
            <div className={css.thumbnailControl}>
              <div id='thumbnailControlUp'
                className={css.thumbnailControlUp}
                onClick={this.scrollup}
                style={{visibility: this.state.toggleScrollUp}}>
                &#60;
              </div>
              <div id='thumbnailControlDown'
                className={css.thumbnailControlDown}
                onClick={this.scrolldown}
                style={{visibility: this.state.toggleScrollDown}}>
                &#62;
              </div>
            </div>
          </Wrapper>
        </WithTrackerHOC>
        <div id='thumbnailList' className={css.thumbnailList}>
          <WithTrackerHOC eventName={'ProductOverview->ImageGallery->ThumbnailList'}>
            <Wrapper>
              <div className={css.thumbnails} style={{top: this.state.thumbnailScroll}}>
                {this.renderThumbnails(this.props.photos)}
              </div>
            </Wrapper>
          </WithTrackerHOC>
        </div>
        <MainImage
          currentImg={this.props.currentImg}
          currentImgIndex={this.props.currentImgIndex}
          changeImage={this.props.changeImage}
          photosLength={this.props.photos.length}/>
      </div>
    );
  }
}

export default ImageGallery;