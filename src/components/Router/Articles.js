import React, { Component } from 'react';
import queryString from 'query-string';
import ArticlesList from './ArticlesList';
import { getAllMenuItems } from '../../service/apiJsonServer';
import SelectArticles from './SelectArticles';

const category = ['all', 'sport', 'health'];
class Articles extends Component {
  state = { articles: [] };

  componentDidMount() {
    getAllMenuItems().then(articles => this.setState({ articles }));
  }

  handleChangeSelect = categoryy => {
    this.props.location.push({
      path: '/articles',
      search: `kk`,
    });
    console.log(categoryy);
  };

  render() {
    const { articles } = this.state;
    console.log(queryString.parse(this.props.location.search));
    return (
      <div>
        <h1>Articles Page</h1>
        <SelectArticles options={category} onChange={this.handleChangeSelect} />
        <ArticlesList articlesForRoute={articles} />
      </div>
    );
  }
}

export default Articles;
