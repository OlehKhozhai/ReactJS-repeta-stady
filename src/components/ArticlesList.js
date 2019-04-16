import React from 'react';

const ArticlesList = ({ articles }) => (
  <ul>
    {articles.map(({ id, title, link }) => (
      <li key={id}>
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
      </li>
    ))}
  </ul>
);

export default ArticlesList;
