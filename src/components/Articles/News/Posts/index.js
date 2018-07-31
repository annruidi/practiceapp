import React, { Component } from 'react';
import axios from 'axios';
import {URL} from '../../../../config';
import styles from '../../articles.css';
import Header from './header';

class NewsArticles extends Component {
  state = {
    article:[],
    team:[]
  }

  componentWillMount(){
    const id = this.props.match.params.id;
    axios.get(`${URL}/articles?id=${id}`)
    .then(response => {
      let article = response.data[0];

      axios.get(`${URL}/teams?id=${article.team}`)
      .then(response => {
         this.setState({
           article,
           team:response.data
         })
      })
    })
  }
  render() {
     
    const article = this.state.article;
    const team = this.state.team;

    return (
      <div className ={styles.articleWrapper}>
        <Header teamData = {team[0]} date = {article.date} author = {article.author}/>
        <div className={styles.article_body}>
          <h1>{article.title}</h1>
          <div className={styles.artImage} style ={{
            background:`url(/images/articles/${article.image})`
          }}></div>
          <div className={styles.artText}>
              {article.body}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsArticles;