import React from 'react';
import css from './styles/addToCart.module.css';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSize: 'default',
      selectSizeId: '',
      selectQty: 'default'
    };
    this.changeSize = this.changeSize.bind(this);
    this.changeQty = this.changeQty.bind(this);
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.styleId !== this.props.styleId) {
      this.setState({selectSize: 'default', selectSizeId: '', selectQty: 'default'});
    }
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
        <select id='selectSize' className={css.selectSize} value={this.state.selectSizeId} onChange={this.changeSize}>
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
      let skuQty = ((this.state.selectSizeId !== '') && (this.props.skus[this.state.selectSizeId])) ? this.props.skus[this.state.selectSizeId].quantity : 0;
      if (skuQty > 15) {
        skuQty = 15;
      }
      for (var i = 1; i <= skuQty; i++) {
        qtyArr.push(i);
      }
      if (this.state.selectSize === 'default' || qtyArr.length === 0) {
        return (<div>
          <select id='selectQty' className={css.selectQty} value={this.state.selectQty} onChange={this.changeQty}>
            <option value='default' key='default'>-</option>
          </select>
        </div>);
      } else {
        return (<div>
          <select id='selectQty' className={css.selectQty} value={this.state.selectQty} onChange={this.changeQty}>
            {qtyArr.map((qty) => <option value={qty} key={'qty-' + qty}>{qty}</option>)}
          </select>
        </div>);
      }
    }
  }

  render () {
    return (
      <div id='AddToCart' className={css.sizeQty}>
        {this.renderSize(this.props.skus)}
        {this.renderQuantity(this.props.skus)}
      </div>
    );
  }
}

export default AddToCart;