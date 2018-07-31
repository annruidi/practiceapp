import React, { Component } from 'react';
import Slider from './Widgets/NewsSlider/slider';
import NewsList from './Widgets/NewsList/newsList';
import VideosList from './Widgets/VideosList/videoslist';

class Home extends Component {
  render() {
    return (
      <div>
        <Slider type='featured'start={0} amount={3}  settings ={{
          dots:false
        }}/>
        <NewsList type='card' 
         start={0}
         loadmore ={true}
         amount = {3}
          />
        <VideosList type='card' 
         start={0}
         title={true}
         loadmore ={true}
         amount = {3}
          />
      </div>
    );
  }
}

export default Home;