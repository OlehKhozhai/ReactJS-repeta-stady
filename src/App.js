import React, { Component, createRef } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Navigation from './components/Navigation';
import ArticlesList from './components/ArticlesList';
import SelectCategory from './components/SelectCategory';
import { getArticlesByQuery } from './service/api';
// import CounterRedux from './CounterRedux';
// import TestCounter from './reduxTest/TestCounter';
import MenuPage from './components/JsonServer/MenuPage';
import Toggler from './components/Toggler';
import AuthManager from './components/Context/AuthManager';
import AuthContextProvider from './components/Context/AuthContext';
import About from './components/Router/About';
import Home from './components/Router/Home';
import Articles from './components/Router/Articles';
import Article from './components/Router/Article';
import MainToDo from './components/ToDo/MainToDo';
import Basket from './components/Basket/Basket';
import Produts from './components/Basket/Produts';

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
        {/* <MainToDo /> */}
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="text-danger">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="text-danger" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="text-danger" to="/articles">
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="text-danger" to="/basket">
              BASKET
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="text-danger" to="/product">
              PRODUCT
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" render={props => <Home title="Home Page" {...props} />} />
          <Route path="/about" component={About} />
          <Route path="/basket" component={Basket} />
          <Route path="/product" component={Produts} />
          <Route exact path="/articles" component={Articles} />
          <Route path="/articles/:id" component={Article} />
          <Redirect to="/" />
        </Switch>

        <AuthContextProvider>
          <Navigation />
          <AuthManager />
          {/* <TestCounter /> */}
          <Toggler>
            {({ on, toggle }) => (
              <>
                <button type="button" onClick={toggle}>
                  Toggle
                </button>
                {/* {on && <CounterRedux />} */}
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
        </AuthContextProvider>
      </div>
    );
  }
}

export default App;
