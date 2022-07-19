import React from 'react';
import css from './styles/imageGallery.module.css';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderThumbnails = this.renderThumbnails.bind(this);
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

  render () {
    return (
      <div className={css.imageGallery}>
        <div className={css.thumbnailList}>
          {this.renderThumbnails(this.props.photos)}
        </div>
        <div id='mainImage' >
          <img src={this.props.currentImg.url} className={css[this.props.currentImgSize]} onClick={this.props.resize} />
        </div>
      </div>
    );
  }
}

export default ImageGallery;