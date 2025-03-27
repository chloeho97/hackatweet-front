import styles from '../styles/LastTweets.module.css';

function LastTweets(props) {



  return (
    <div>
        <div className={styles.headerTweet}>
            {props.profilPicture}
            {props.firstname}      
            {props.username}            
            <div>{/* Il y a 5 heures */}</div>
        </div>
        <div className={styles.tweetContent}>
            {props.tweetContent}
        </div>
{/*         <div className={styles.tweetLike}>
            {props.content}
        </div> */}
    </div>
  );
}

export default LastTweets;
