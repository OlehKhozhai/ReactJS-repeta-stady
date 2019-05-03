import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class ArticlesList extends Component {
  state = {};

  render() {
    const { articlesForRoute, match } = this.props;
    return (
      <>
        <ul>
          {articlesForRoute.map(article => (
            <li key={article.id}>
              <Link to={`${match.url}/${article.id}`}>{article.name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(ArticlesList);
