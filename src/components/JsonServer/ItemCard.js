import React from 'react';

const ItemCard = ({ name, price, description, onDeleteItem, onItemById }) => (
  <div>
    <div className=" d-flex justify-content-between align-items-center">
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <span>Description: {description}</span>
    </div>

    <div>
      <button type="button" className="btn btn-success" onClick={onItemById}>
        More info
      </button>
      <button type="button" className="btn btn-danger" onClick={onDeleteItem}>
        Delete
      </button>
    </div>
  </div>
);

export default ItemCard;
