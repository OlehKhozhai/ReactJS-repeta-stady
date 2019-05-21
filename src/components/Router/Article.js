import React, { Component } from 'react';
import { getMenuItemById } from '../../service/apiJsonServer';

class Article extends Component {
  state = { description: null, id: null, name: null, price: null, category: null };

  componentDidMount() {
    const { match } = this.props;
    getMenuItemById(match.params.id).then(article => this.setState({ ...article }));
  }

  handleGoBack = () => {
    const { category } = this.state;
    const { location, history } = this.props;
    if (location.state) {
      console.log('11');
      return history.push(location.state.from);
    }
    this.props.history.push({ pathname: '/articles', search: `category=${category}` });
  };

  render() {
    const { id, name, description, price } = this.state;

    return (
      <>
        <p>name: {name}</p>
        <p>Price: {price}</p>
        <p>description: {description}</p>
        <div>Article {id}</div>
        <button type="button" onClick={this.handleGoBack}>
          Go BAck
        </button>
      </>
    );
  }
}

export default Article;
