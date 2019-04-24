import React, { Component } from 'react';
import * as API from '../../service/apiJsonServer';
import MenuItems from './MenuItems';

class MenuPage extends Component {
  state = { menu: [] };

  componentDidMount() {
    API.getAllMenuItems().then(menu => this.setState({ menu }));
  }

  handleItemById = id => {
    API.getMenuItemById(id).then(res => console.log(res));
  };

  addItemToMenu = () => {
    const item = {
      name: 'Some Food',
      price: 3400,
      description: 'Show HN: Airmash – Multiplayer Missile Warfare HTML5 Game',
    };
    API.addMenuItem(item).then(res => {
      if (!res) return;
      this.setState(state => ({
        menu: [...state.menu, res],
      }));
    });
  };

  handleDeleteItem = id => {
    API.deleteMenuItem(id).then(isDeleted => {
      if (isDeleted) {
        this.setState(state => ({
          menu: state.menu.filter(item => item.id !== id),
        }));
      }
    });
  };

  render() {
    const { menu } = this.state;
    return (
      <div className="container b-1">
        <MenuItems
          menu={menu}
          onDeleteItem={this.handleDeleteItem}
          onItemById={this.handleItemById}
        />
        <button type="button" className="btn btn-primary" onClick={this.addItemToMenu}>
          Add new Item
        </button>
      </div>
    );
  }
}

export default MenuPage;
