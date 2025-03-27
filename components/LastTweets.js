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

  const formatTimeSince = (timestamp) => {
    const now = Date.now(); // Obtenir le temps actuel en millisecondes
    const timeSince = now - timestamp; // Différence entre maintenant et le timestamp
  
    const minutes = Math.floor(timeSince / 60000); 
    const hours = Math.floor(minutes / 60); 
  
    if (timeSince < 3600000) { // Moins d'une heure
      return `${minutes} minutes`;
    } else {
      return `${hours} heures`; // Arrondi à l'heure inférieure
    }
  };

  return (
    <div>
    <div className={styles.headerTweet}>
      <div className={styles.profilIcon}>
        <img src="./profilPicture.jpg" className={styles.profilPictureIcon} />
      </div>  
      {props.firstname}      
      {props.username}   
      <div> Il y a {formatTimeSince(props.id)} </div>
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

