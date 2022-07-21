import React from 'react';
import css from './styles/imageGallery.module.css';
import MainImage from './MainImage.jsx';

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
  }

  componentDidMount () {
    this.renderScrollUp();
    this.renderScrollDown();
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.props.photos !== this.state.photos) {
      this.setState({photos: this.props.photos});
    }
    if (previousState.photos !== this.state.photos || this.state.scrollCount !== previousState.scrollCount) {
      this.renderScrollUp();
      this.renderScrollDown();
    }

    if (previousProps.currentImgIndex !== this.props.currentImgIndex && this.props.currentImgIndex === 0) {
      this.setState({thumbnailScroll: 0, scrollCount: 0})
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
              <img src={thumbnail.thumbnail_url} name={thumbnail.url} onClick={this.props.changeImage}/>
            </div>
          );
        } else {
          return (
            <div className={css.thumbnail} key={unique + thumbnail.url} >
              <img src={thumbnail.thumbnail_url} name={thumbnail.url} onClick={this.props.changeImage}/>
            </div>
          );
        }
    });
  }

  renderScrollUp () {
    if (this.state.scrollCount > 0) {
      this.setState({toggleScrollUp: 'visible'})
    } else {
      this.setState({toggleScrollUp: 'hidden'})
    }
  }

  renderScrollDown () {
    let photosQty = this.state.photos.length;
    if (photosQty > 7 && this.state.scrollCount < photosQty - 7) {
      this.setState({toggleScrollDown: 'visible'})
    } else {
      this.setState({toggleScrollDown: 'hidden'})
    }
  }

  scrolldown () {
    let thumbnailScroll = this.state.thumbnailScroll - 115;
    let scrollCount = this.state.scrollCount;
    scrollCount++;
    this.setState({thumbnailScroll, scrollCount})
  }

  scrollup () {
    let thumbnailScroll = this.state.thumbnailScroll + 115;
    let scrollCount = this.state.scrollCount;
    scrollCount--;
    this.setState({thumbnailScroll, scrollCount})
  }

  render () {
    return (
      <div id='ImageGallery' className={css.imageGallery}>
        <div id='thumbnailControl' className={css.thumbnailControl}>
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
        <div id='thumbnailList' className={css.thumbnailList}>
          <div className={css.thumbnails} style={{top: this.state.thumbnailScroll}}>
            {this.renderThumbnails(this.props.photos)}
          </div>
        </div>
        <MainImage
        currentImg={this.props.currentImg}
        currentImgSize={this.props.currentImgSize}
        resize={this.props.resize}/>
      </div>
    );
  }
}

export default ImageGallery;