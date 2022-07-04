import React from 'react';
import AddToCart from './AddToCart.jsx';
import css from './styles/styleSelector.module.css';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.currentPrice = this.currentPrice.bind(this);
  }

  changeStyle (event) {
    this.props.changeStyle(event.currentTarget.id);
  }

  currentPrice (style) {
    if (style.sale_price !== null) {
      return (<div className={css.price}>
        <div className={css.original}>${style.original_price}</div>
        <div>${style.sale_price}</div>
      </div>);
    } else {
      return (<div className={css.price}>${style.original_price}</div>);
    }
  }

  createStyleRows (styles) {
    let rows = [];
    let row = [];
    styles.forEach((style) => {
      if (row.length < 4) {
        row.push(style);
      } else {
        rows.push(row);
        row = [];
        row.push(style);
      }
    });
    rows.push(row);
    return rows;
  }

  renderStyles (styleData) {
    let styleRows = this.createStyleRows(styleData);
    return styleRows.map((row, index) =>
      <div key={'styleRow-' + index} className={css.styleRow}>
        {row.map((style) =>
          <div key={style.style_id} id={style.style_id} className={css.styleIcon} onClick={this.changeStyle}>
            <img src={style.photos[0].thumbnail_url}/>
          </div>
        )}
      </div>
    );
  }

  render () {
    return (
      <div className={css.styleSelector}>
        <div>
          Reviews Component goes here
        </div>
        <div className={css.category}>{this.props.productData.category}</div>
        <div className={css.productName}>{this.props.productData.name}</div>
        {this.currentPrice(this.props.selectedData)}
        <div className={css.style}>
          <b>{'STYLE > '}</b>
          {this.props.selectedData.name}
        </div>
        {this.renderStyles(this.props.styleData)}
        <AddToCart
          skus = {this.props.selectedData.skus}/>
      </div>
    );
  }
}

export default StyleSelector;