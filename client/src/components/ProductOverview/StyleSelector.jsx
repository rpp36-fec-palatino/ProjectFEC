import React from 'react';
import AddToCart from './AddToCart.jsx';
import css from './styles/styleSelector.module.css';
import Stars from '../RatingsAndReviews/Stars.jsx';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';

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
        return (<div id='price' className={css.price}>
          <div className={css.original}>${style.original_price}</div>
          <div>${style.sale_price}</div>
        </div>);
      } else {
        return (<div id='price' className={css.price}>${style.original_price}</div>);
      }
    } else {
      return (<div id='price' className={css.price}>${this.props.productData.default_price}</div>);
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
        {row.map((style) => {
          if (style.style_id === this.props.selectedData.style_id) {
            return (
              <div key={style.style_id} id={style.style_id} className={css.styleIcon} onClick={this.changeStyle}>
                <div className={css.checkMark}>&#10004;</div>
                <img id={'style: ' + style.style_id} src={style.photos[0].thumbnail_url}/>
              </div>);
          } else {
            return (
              <div key={style.style_id} id={style.style_id} className={css.styleIcon} onClick={this.changeStyle}>
                <img id={'style: ' + style.style_id} src={style.photos[0].thumbnail_url}/>
              </div>);
          }
        })}
      </div>
    );
  }

  renderRating () {
    let stars = this.props.avgRating;
    if (stars === 0) {
      return (<div></div>);
    } else {
      let percent = Math.round((stars / 5) * 100);
      let str = `Read all ${this.props.reviewCount} reviews`;
      return (<div>
        <Stars percent={percent}/>
        <a id='scrollToReviews' className={css.reviewCount} href="#RatingsAndReviews">{str}</a>
      </div>);
    }
  }

  renderOutfit () {
    let outfit = this.props.outfit;
    let currentProductId = this.props.productData.id;
    if (outfit[currentProductId]) {
      return (
        <div id='toggleOutfit' className={css.outfit} onClick={this.toggleOutfit}>
          &#9825;
        </div>);
    } else {
      return (
        <div id='toggleOutfit' className={css.outfit} onClick={this.toggleOutfit}>
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
      <WithTrackerHOC eventName={'ProductOverview->StyleSelector'}>
        <Wrapper>
          <div id='StyleSelector' className={css.styleSelector}>
            {this.renderRating()}
            <div id='category' className={css.category}>{this.props.productData.category}</div>
            <b id='productName' className={css.productName}>{this.props.productData.name}</b>
            {this.currentPrice(this.props.selectedData)}
            <div id='style' className={css.style}>
              <b>{'STYLE > '}</b>
              {this.props.selectedData.name}
            </div>
            {this.renderStyles(this.props.styleData)}
            <AddToCart
              skus={this.props.selectedData.skus}
              styleId={this.props.selectedData.style_id}/>
            <div className={css.bagOutfit}>
              <div className={css.addToBag}>
                <div id='addToBag' className={css.bag}>ADD TO BAG</div>
                <div className={css.plus}>+</div>
              </div>
              {this.renderOutfit()}
            </div>
          </div>
        </Wrapper>
      </WithTrackerHOC>
    );
  }
}

export default StyleSelector;
