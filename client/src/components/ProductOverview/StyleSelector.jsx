import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: this.props.selectedData.original_price
    };
  }

  changeStyle (event) {
    console.log(event.currentTarget.id);
    this.props.changeStyle(event.currentTarget.id);
    this.checkDiscount();
  }

  componentDidMount () {
    this.checkDiscount();
  }

  checkDiscount () {
    if (this.props.selectedData.sale_price !== null) {
      this.setState({currentPrice: this.props.selectedData.sale_price});
    } else {
      this.setState({currentPrice: this.props.selectedData.original_price});
    }
  }

  render () {


    return (
      <div id='styleSelector'>
        <div>
          Reviews Component goes here
        </div>
        <p>{this.props.productData.category}</p>
        <h1>{this.props.productData.name}</h1>
        <p>${this.state.currentPrice}</p>
        <b>{'STYLE > ' + this.props.selectedData.name}</b>
        {this.props.styleData.map((style) =>
          <div key={style.style_id} id={style.style_id} onClick={this.changeStyle.bind(this)}>
            <p>{style.name}</p>
            <img src={style.photos[0].thumbnail_url} style={{width: '50px'}, {height: '50px'}}/>
          </div>
        )}
      </div>
    );
  }
}

export default StyleSelector;