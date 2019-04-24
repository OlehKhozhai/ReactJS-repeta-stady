import React, { Component, createRef } from 'react';
import Navigation from './components/Navigation';
import ArticlesList from './components/ArticlesList';
import SelectCategory from './components/SelectCategory';
import { getArticlesByQuery } from './service/api';
import CounterRedux from './CounterRedux';
import MenuPage from './components/JsonServer/MenuPage';
import Toggler from './components/Toggler';
import MainContext from './components/Context/MainContext';
import AuthManager from './components/Context/AuthManager';

const Categories = ['html', 'css', 'javaScript', 'react'];
class App extends Component {
  refContainer = createRef();

  state = {
    articles: [],
    isLoaded: false,
    error: null,
    category: Categories[0],
  };

  componentDidMount() {
    this.fetchingArticles(this.state.category);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCategory = prevState.category;
    const currentCategory = this.state.category;

    if (prevCategory !== currentCategory) {
      this.fetchingArticles(currentCategory);
    }
  }

  handleChangeCategory = event => {
    this.setState({ category: event.target.value });
  };

  fetchingArticles = query => {
    this.setState({ isLoaded: true });

    getArticlesByQuery(query)
      .then(articles => {
        this.setState({ articles, isLoaded: false });
      })
      .catch(error => {
        this.setState({ error, isLoaded: false });
      });
  };

  render() {
    const { articles, isLoaded, error, category } = this.state;
    return (
      <div className="container">
        <Navigation />
        <MainContext />
        <AuthManager />

        <Toggler>
          {({ on, toggle }) => (
            <>
              <button type="button" onClick={toggle}>
                Toggle
              </button>
              {on && <CounterRedux />}
            </>
          )}
        </Toggler>
        <SelectCategory
          onChangeCategory={this.handleChangeCategory}
          category={category}
          options={Categories}
        />
        <MenuPage />
        {error && <p>{error.message}</p>}
        {isLoaded ? <p>Loading...</p> : <ArticlesList articles={articles} />}
      </div>
    );
  }
}

export default App;
