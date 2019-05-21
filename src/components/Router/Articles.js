import React, { Component } from 'react';
import queryString from 'query-string';
import ArticlesList from './ArticlesList';
import { getAllMenuItems, addMenuItemByCategory } from '../../service/apiJsonServer';
import SelectArticles from './SelectArticles';

const category = ['all', 'sport', 'health'];
class Articles extends Component {
  state = { articles: [] };

  componentDidMount() {
    const { location, history } = this.props;
    const currentCategory = this.currentCategory(this.props);
    if (!currentCategory) {
      history.replace({
        pathname: location.pathname,
        search: `category=all`,
      });
      return;
    }

    addMenuItemByCategory(currentCategory).then(articles => this.setState({ articles }));
  }

  componentDidUpdate(prevProps) {
    const prevPropss = this.currentCategory(prevProps);
    const currentProps = this.currentCategory(this.props);
    if (prevPropss === currentProps) return;
    addMenuItemByCategory(currentProps).then(articles => this.setState({ articles }));
  }

  handleChangeSelect = categoryy => {
    const { location, history } = this.props;
    history.push({
      pathname: location.pathname,
      search: `category=${categoryy}`,
    });
  };

  currentCategory = props => queryString.parse(props.location.search).category;

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h1>Articles Page</h1>
        <SelectArticles
          options={category}
          onChange={this.handleChangeSelect}
          value={this.currentCategory(this.props)}
        />
        <ArticlesList articlesForRoute={articles} />
      </div>
    );
  }
}

export default Articles;
