import React from 'react';
import ItemCard from './ItemCard';

const MenuItems = ({ menu, onDeleteItem, onItemById }) => (
  <ul className="list-group">
    {menu.map(({ id, name, price, description }) => (
      <li key={id} className="list-group-item">
        <ItemCard
          name={name}
          price={price}
          description={description}
          onItemById={() => onItemById(id)}
          onDeleteItem={() => onDeleteItem(id)}
        />
      </li>
    ))}
  </ul>
);

export default MenuItems;
