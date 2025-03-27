import styles from '../styles/LastTweets.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likedTweet } from '../reducers/likedTweet'


function LastTweets(props) {

/* const handleLike = () => {
  props.
} */

  const dispatch = useDispatch();
  const likedTweet = useSelector((state) => state.likedTweet.value);

  const isLiked = likedTweets.includes(props.id); 

  const handleLike = () => {
    dispatch(likedTweet(props.id))
  }

  return (
    <div>
    <div className={styles.headerTweet}>
      <div className={styles.profilIcon}>
        <img src="./profilPicture.jpg" className={styles.profilPictureIcon} />
      </div>  
      {props.firstname}      
      {props.username}   
      <div>{/* Il y a 5 heures */}</div>
    </div>
    <div className={styles.tweetContent}>
      {props.tweetContent}
    </div>
    <div className={styles.tweetLike}>
      <span><FontAwesomeIcon icon={faHeart} onClick={() => handleLike()}             className={isLiked ? styles.liked : styles.unliked}  /></span>
    </div>
</div> 
  );
}


export default LastTweets;

