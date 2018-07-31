import React from 'react';
import styles from './videosrelated.css';
import VideoTemplate from '../videotemplate';

const videosRelated = (props) => {
  return (
    <div className={styles.relatedWrapper}>
      <VideoTemplate data={props.data}/>
    </div>
  );
};

export default videosRelated;