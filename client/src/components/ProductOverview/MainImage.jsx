import React from 'react';
import css from './styles/mainImage.module.css';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleScrollLeft: 'hidden',
      toggleScrollRight: 'hidden',
      justifycontent: 'center',
      currentImgSize: 668,
      cursor: 'auto'
    };
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.renderScrollLeft = this.renderScrollLeft.bind(this);
    this.renderScrollRight = this.renderScrollRight.bind(this);
    this.resize = this.resize.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
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
      this.setState({justifycontent: 'left', currentImgSize: 1350, cursor: 'crosshair'});
    } else {
      this.setState({justifycontent: 'center', currentImgSize: 668, cursor: 'zoom-in'});
    }
  }

  onMouseOver () {
    if (this.state.currentImgSize === 668) {
      this.setState({cursor: 'zoom-in'});
    } else if (this.state.currentImgSize === 1350) {
      this.setState({cursor: 'crosshair'});
    }
  }

  render () {
    return (
      <div id='mainImage' className={css.mainImage}>
        <WithTrackerHOC eventName={'ProductOverview->ImageGallery->MainImage'}>
          <Wrapper>
            <div className={css.mainImageContainer} style={{justifyContent: this.state.justifycontent}}>
              <div className={css.imageControlContainer}>
                <div id='imageControlLeft'
                  className={css.imageControl}
                  onClick={this.scrollLeft}
                  style={{visibility: this.state.toggleScrollLeft}}>
                  &#60;
                </div>
              </div>
              <div className={css.currentImageContainer}>
                <img id='currentImage'
                  src={this.props.currentImg.url}
                  className={css.currentImage}
                  style={{width: this.state.currentImgSize, cursor: this.state.cursor}}
                  onClick={this.resize}
                  onMouseOver={this.onMouseOver}
                />
              </div>
              <div className={css.imageControlContainer}>
                <div id='imageControlRight'
                  className={css.imageControl}
                  onClick={this.scrollRight}
                  style={{visibility: this.state.toggleScrollRight}}>
                  &#62;
                </div>
              </div>
            </div>
          </Wrapper>
        </WithTrackerHOC>
      </div>
    );
  }
}

export default MainImage;