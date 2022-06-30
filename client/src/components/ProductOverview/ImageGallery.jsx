import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: this.props.photos[0],
      currentImgSize: 'mainImageFit'
    };
  }

  changeImage (event) {
    let selectedThumb = event.target.name;
    if (selectedThumb !== this.state.currentImg.url) {
      this.props.photos.forEach((photo) => {
        if (selectedThumb === photo.url) {
          this.setState({currentImg: photo, currentImgSize: 'mainImageFit'});
        }
      });
    }
  }

  resize (event) {
    if (this.state.currentImgSize === 'mainImageFit') {
      this.setState({currentImgSize: 'mainImageExpand'});
    } else {
      this.setState({currentImgSize: 'mainImageFit'});
    }
  }

  render () {
    return (
      <div id='imageGallery'>
        <div id='thumbnailList'>
          {this.props.photos.map((thumbnail) =>
            <div className='thumbnail' key={thumbnail.url} >
              <img src={thumbnail.thumbnail_url} name={thumbnail.url} onClick={this.changeImage.bind(this)}/>
            </div>
          )}
        </div>
        <div id='mainImage' >
          <img src={this.state.currentImg.url} id={this.state.currentImgSize} onClick={this.resize.bind(this)} />
        </div>
      </div>
    );
  }
}

export default ImageGallery;