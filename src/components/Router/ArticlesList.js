import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class ArticlesList extends Component {
  state = {};

  render() {
    const { articlesForRoute, match, location } = this.props;
    return (
      <>
        <ul>
          {articlesForRoute.map(article => (
            <li key={article.id}>
              <Link
                to={{
                  pathname: `${match.url}/${article.id}`,
                  state: { from: location },
                }}
              >
                {article.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(ArticlesList);
