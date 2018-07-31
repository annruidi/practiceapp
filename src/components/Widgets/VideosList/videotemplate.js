import React from 'react';
import styles from './videos.css';
import {Link} from 'react-router-dom';
import CardInfo from '../CardInfo/cardinfo';

const VideoTemplate = (props) => {
    return props.data.map((item, i) => (
      <Link to = {`/videos/${item.id}`} key={i}>
          <div className={styles.video_wrapper}>
              <div className = {styles.left}
              style = {{
                backgroundImage:`url(/images/videos/${item.image}`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
              }}>
              <div></div>
              </div>
              <div className = {styles.right}>
              <CardInfo teams={props.teams} team={item.team} date={item.date}/>
                  <h2>{item.title}</h2>
              </div>
          </div>
      </Link>
    ))
}

export default VideoTemplate;