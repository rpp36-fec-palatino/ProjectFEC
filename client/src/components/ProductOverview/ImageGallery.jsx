import React from 'react';
import css from './styles/imageGallery.module.css';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className={css.imageGallery}>
        <div className={css.thumbnailList}>
          {this.props.photos.map((thumbnail) =>
            <div className={css.thumbnail} key={thumbnail.url} >
              <img src={thumbnail.thumbnail_url} name={thumbnail.url} onClick={this.props.changeImage}/>
            </div>
          )}
        </div>
        <div id='mainImage' >
          <img src={this.props.currentImg.url} className={css[this.props.currentImgSize]} onClick={this.props.resize} />
        </div>
      </div>
    );
  }
}

export default ImageGallery;