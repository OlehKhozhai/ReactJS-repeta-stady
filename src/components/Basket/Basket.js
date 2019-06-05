import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductsInBasket } from './selectors';
import { removeFromBasket } from './actions';

class Basket extends Component {
  render() {
    const { products, removeProductFromBasket } = this.props;
    return (
      <div>
        <h1>Basket</h1>
        {products &&
          products.map(({ id, name, price, amount }) => (
            <>
              <li key={id}>
                name: {name} | amount:{amount}
              </li>
              <button type="button" onClick={() => removeProductFromBasket(id)}>
                remove
              </button>
            </>
          ))}
      </div>
    );
  }
}
const mapStateToProp = state => ({ products: getProductsInBasket(state) });
const mapDispatchToProp = { removeProductFromBasket: removeFromBasket };
export default connect(
  mapStateToProp,
  mapDispatchToProp,
)(Basket);
