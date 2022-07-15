import React from 'react';
import css from './styles/AddToCart.module.css';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSize: 'default',
      selectSizeId: '',
      selectQty: 1
    };
    this.changeSize = this.changeSize.bind(this);
    this.changeQty = this.changeQty.bind(this);
  }

  changeSize(event) {
    let id = event.target.value;
    this.setState({selectSize: this.props.skus[id].size, selectSizeId: id, selectQty: 1});
  }

  changeQty(event) {
    this.setState({selectQty: event.target.value});
  }

  renderSize (skus) {
    if (skus.null) {
      return (<div>
        OUT OF STOCK
      </div>);
    } else {
      return (<div>
        <select className={css.selectSize} value={this.state.selectSizeId} onChange={this.changeSize}>
          <option value='default' key='default'>SELECT SIZE</option>
          {Object.keys(skus).map((id) => <option value={id} key={id} label={skus[id].size}>
            {skus[id].size}
          </option>)}
        </select>
      </div>);
    }
  }

  renderQuantity (skus) {
    if (!skus.null) {
      let qtyArr = [];
      let skuQty = ((this.state.selectSizeId !== '') && (this.props.skus[this.state.selectSizeId])) ? this.props.skus[this.state.selectSizeId].quantity : 1;
      if (skuQty > 15) {
        skuQty = 15;
      }
      for (var i = 1; i <= skuQty; i++) {
        qtyArr.push(i);
      }
      return (<div>
        <select className={css.selectQty} value={this.state.selectQty} onChange={this.changeQty}>
          {qtyArr.map((qty) => <option value={qty} key={'qty-' + qty}>{qty}</option>)}
        </select>
      </div>);
    }
  }

  render () {
    return (
      <div className={css.sizeQty}>
        {this.renderSize(this.props.skus)}
        {this.renderQuantity(this.props.skus)}
      </div>
    );
  }
}

export default AddToCart;