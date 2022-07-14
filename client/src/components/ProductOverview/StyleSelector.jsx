import React from 'react';
import AddToCart from './AddToCart.jsx';
import css from './styles/styleSelector.module.css';
import Stars from '../RatingsAndReviews/Stars.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.currentPrice = this.currentPrice.bind(this);
    this.renderRating = this.renderRating.bind(this);
    this.renderOutfit = this.renderOutfit.bind(this);
    this.toggleOutfit = this.toggleOutfit.bind(this);
  }

  changeStyle (event) {
    this.props.changeStyle(event.currentTarget.id);
  }

  currentPrice (style) {
    if (parseInt(style.original_price) !== 0) {
      if (style.sale_price !== null) {
        return (<div className={css.price}>
          <div className={css.original}>${style.original_price}</div>
          <div>${style.sale_price}</div>
        </div>);
      } else {
        return (<div className={css.price}>${style.original_price}</div>);
      }
    } else {
      return (<div className={css.price}>${this.props.productData.default_price}</div>);
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

  renderRating () {
    let stars = this.props.avgRating;
    if (stars === 0) {
      return (<div></div>);
    } else {
      let percent = Math.round((stars / 5) * 100);
      return (<Stars percent={percent}/>);
    }
  }

  renderOutfit () {
    let outfit = this.props.outfit;
    let currentProductId = this.props.productData.id;
    if (outfit[currentProductId]) {
      return (
        <div className={css.outfit} onClick={this.toggleOutfit}>
          &#9733;
        </div>);
    } else {
      return (
        <div className={css.outfit} onClick={this.toggleOutfit}>
          &#9734;
        </div>);
    }
  }

  toggleOutfit () {
    let outfit = this.props.outfit;
    let currentProductId = this.props.productData.id;
    if (outfit[currentProductId]) {
      this.props.modifyOutfit('remove', currentProductId);
    } else {
      this.props.modifyOutfit('add', currentProductId);
    }
  }

  render () {
    return (
      <div className={css.styleSelector}>
        {this.renderRating()}
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
        <div className={css.bagOutfit}>
          <div className={css.addToBag}>
            <div className={css.bag}>ADD TO BAG</div>
            <div className={css.plus}>+</div>
          </div>
          {this.renderOutfit()}
        </div>
      </div>
    );
  }
}

export default StyleSelector;