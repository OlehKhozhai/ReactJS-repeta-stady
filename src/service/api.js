import Axios from 'axios';

const API_URL = 'https://hn.algolia.com/api/v1/search?query=';

const articlesMapper = articles => {
  return articles.map(({ objectID, title, url }) => ({
    id: objectID,
    title,
    link: url,
  }));
};

export const getArticlesByQuery = query =>
  Axios.get(API_URL + query).then(response => articlesMapper(response.data.hits));

export const postArticles = '';
