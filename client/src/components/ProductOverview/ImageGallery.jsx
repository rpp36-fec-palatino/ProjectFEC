import React from 'react';
import css from './styles/imageGallery.module.css';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: this.props.photos[0],
      currentImgSize: css.mainImageFit
    };
  }

  changeImage (event) {
    let selectedThumb = event.target.name;
    if (selectedThumb !== this.state.currentImg.url) {
      this.props.photos.forEach((photo) => {
        if (selectedThumb === photo.url) {
          this.setState({currentImg: photo, currentImgSize: css.mainImageFit});
        }
      });
    }
  }

  resize (event) {
    if (this.state.currentImgSize === css.mainImageFit) {
      this.setState({currentImgSize: 'mainImageExpand'});
    } else {
      this.setState({currentImgSize: css.mainImageFit});
    }
  }

  render () {
    return (
      <div className={css.imageGallery}>
        <div className={css.thumbnailList}>
          {this.props.photos.map((thumbnail) =>
            <div className={css.thumbnail} key={thumbnail.url} >
              <img src={thumbnail.thumbnail_url} name={thumbnail.url} onClick={this.changeImage.bind(this)}/>
            </div>
          )}
        </div>
        <div id='mainImage' >
          <img src={this.state.currentImg.url} className={this.state.currentImgSize} onClick={this.resize.bind(this)} />
        </div>
      </div>
    );
  }
}

export default ImageGallery;