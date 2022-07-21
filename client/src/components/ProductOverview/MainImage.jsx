import React from 'react';
import css from './styles/mainImage.module.css';

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleScrollLeft: 'hidden',
      toggleScrollRight: 'hidden',
      currentImgSize: 668
    };
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.renderScrollLeft = this.renderScrollLeft.bind(this);
    this.renderScrollRight = this.renderScrollRight.bind(this);
    this.resize = this.resize.bind(this);
  }

  componentDidMount () {
    this.renderScrollLeft();
    this.renderScrollRight();
  }

  componentDidUpdate(previousProps, previousState) {
    let previousImgIndex = previousProps.currentImgIndex;
    let currentImgIndex = this.props.currentImgIndex;
    let previousPhotoLength = previousProps.photosLength;
    let currentPhotoLength = this.props.photosLength;
    if (previousImgIndex !== currentImgIndex || previousPhotoLength !== currentPhotoLength) {
      this.renderScrollLeft();
      this.renderScrollRight();
    }
  }

  renderScrollLeft () {
    if (this.props.currentImgIndex > 0) {
      this.setState({toggleScrollLeft: 'visible'});
    } else {
      this.setState({toggleScrollLeft: 'hidden'});
    }
  }

  renderScrollRight () {
    if (this.props.currentImgIndex < this.props.photosLength - 1) {
      this.setState({toggleScrollRight: 'visible'});
    } else {
      this.setState({toggleScrollRight: 'hidden'});
    }
  }

  scrollLeft () {
    this.props.changeImage(null, 'previous');
  }

  scrollRight () {
    this.props.changeImage(null, 'next');
  }

  resize (event) {
    if (this.state.currentImgSize === 668) {
      this.setState({currentImgSize: 1400});
    } else {
      this.setState({currentImgSize: 668});
    }
  }

  render () {
    return (
      <div id='mainImage' className={css.mainImage}>
        <div id='mainImageContainer' className={css.mainImageContainer}>
          <div id='imageControlLeft'
            className={css.imageControlLeft}
            onClick={this.scrollLeft}
            style={{visibility: this.state.toggleScrollLeft}}>
            &#60;
          </div>
          <div className={css.currentImageContainer}>
            <img id='currentImage'
              src={this.props.currentImg.url}
              className={css.currentImage}
              style={{width: this.state.currentImgSize}}
              onClick={this.resize}
            />
          </div>

          <div id='imageControlRight'
            className={css.imageControlRight}
            onClick={this.scrollRight}
            style={{visibility: this.state.toggleScrollRight}}>
            &#62;
          </div>
        </div>
      </div>
    );
  }
}

export default MainImage;