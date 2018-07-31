import React, { Component } from 'react';
import styles from './videos.css';
import  axios from 'axios';
import {URL} from '../../../config';
import Button from '../Button/button';
import VideoTemplate from './videotemplate';

class VideosList extends Component {

  state = {
    teams:[],
    videos:[],
    start:this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  request = (start, end) => {
    if(this.state.teams.length < 1) {
      axios.get(`${URL}/teams`)
      .then( res => {
        this.setState({
          teams: res.data
        })
      })
    }
    axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
    .then(res => {
       this.setState({
         videos :[...this.state.videos, ...res.data],
         start:start,
         end: end
       })
    })
  }

  renderTitle(){
    return this.props.title ?
     <h3> <strong> NBA</strong> Videos</h3>:
     null;
  }
  loadMore(){
    const end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  }

  renderVideos(){
    let template = null;
    switch(this.props.type){
      case 'card':
           template = <VideoTemplate data = {this.state.videos}
            teams = {this.state.teams}/>;
           break;
      default:
           template = null;
           break;
    }
     return template;
  }
  renderButton(){
     return this.props.loadmore ?
     <Button type='loadmore' cta = "Load More Videos" loadMore = {() => this.loadMore()}/>:
     <Button type='linkTo' cta = "More Videos" linkTo = "/videos" />
  }
  componentWillMount(){
    this.request(this.state.start, this.state.end);
  }
  render() {
    return (
      <div className = {`hello ${styles.videolist_wrapper}`}>
         {this.renderTitle()}
         {this.renderVideos()}
         {this.renderButton()}
      </div>
    );
  }
}

export default VideosList;