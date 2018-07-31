import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Layout from './hoc/Layout/layout';
import NewsArticles from './components/Articles/News/Posts/index';
import VideoArticle from './components/Articles/Videos/Video/index';

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path ='/' exact component = {Home}/>
          <Route path = '/articles/:id' exact component={NewsArticles}/>
          <Route path ='/videos/:id' exact component={VideoArticle}/>
        </Switch>
      </Layout>
    );
  }
}

export default Routes;