import React, { Component } from 'react';
import { getMenuItemById } from '../../service/apiJsonServer';

class Article extends Component {
  state = { description: null, id: null, name: null, price: null };

  componentDidMount() {
    const { match } = this.props;
    getMenuItemById(match.params.id).then(article => this.setState({ ...article }));
  }

  render() {
    const { id, name, description, price } = this.state;

    return (
      <>
        <p>name: {name}</p>
        <p>Price: {price}</p>
        <p>description: {description}</p>
        <div>Article {id}</div>
      </>
    );
  }
}

export default Article;
