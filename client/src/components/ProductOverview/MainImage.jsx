import React from 'react';
import css from './styles/mainImage.module.css';

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
  }

  componentDidUpdate(previousProps, previousState) {

  }

  render () {
    return (
      <div id='mainImage' className={css.mainImage}>
        <div id='mainImageContainer' className={css.mainImageContainer}>
            <div id='imageControlLeft'
              className={css.imageControlLeft}
              onClick={this.scrollleft}
              style={{visibility: this.state.toggleScrollLeft}}>
              &#60;
            </div>
            <img id='currentImage'
              src={this.props.currentImg.url}
              className={css.currentImage}
              style={{width: this.props.currentImgSize}}
              onClick={this.props.resize}
            />
            <div id='imageControlRight'
              className={css.imageControlRight}
              onClick={this.scrollright}
              style={{visibility: this.state.toggleScrollRight}}>
              &#62;
            </div>
        </div>
    </div>
    );
  }
}

export default MainImage;