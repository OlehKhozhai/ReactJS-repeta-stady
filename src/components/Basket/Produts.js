import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from './selectors';
import { addToBasket } from './actions';

class Produts extends Component {
  render() {
    const { products, addProduct } = this.props;

    return (
      <div>
        <h1>Products</h1>
        {products &&
          products.map(({ id, name }) => (
            <li key={name}>
              {name}
              <button type="button" onClick={() => addProduct(id)}>
                add to basket
              </button>
            </li>
          ))}
      </div>
    );
  }
}

const mapStateToProp = state => ({ products: getAllProducts(state) });
const mapDispatchToProp = { addProduct: addToBasket };

export default connect(
  mapStateToProp,
  mapDispatchToProp,
)(Produts);
