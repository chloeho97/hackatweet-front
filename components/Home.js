import styles from '../styles/Home.module.css';
import Tweet from './Tweet'
import LastTweets from './LastTweets'
import { useSelector } from 'react-redux';
/* import { useSelector } from 'react-redux';
 */



function Home() {

  const tweets = useSelector((state) => state.tweets.value)

  const lastTweetsComponents = tweets.map((data, i) => {
    return <LastTweets key={i} firstname={data.firstname} username={data.username} id={data.id} profilPicture={data.profilPicture} />;
});

  return (
    <div>
      <main className={styles.main}>

      {/* HOME - LEFT */}

      <div className={styles.homeLeft}>
        
        <div>
        <img className={styles.logo} src='./twitter-logo.png' />
        </div>
        <div className={styles.userInfo} >
          <p>userInfo</p>
        </div>
      </div>


      {/* HOME - CENTER */}
      <div className={styles.homeCenter}>

        <h2 className={styles.title}>
          Home
        </h2>

        <div>
          <Tweet />
        </div>

        <div>
      {/* {lastTweetsComponents} */}
      <p>CENTER PART 2</p>

          <div>
              <div className={styles.headerTweet}>
              <div className={styles.profilIcon}>
                <img src="./profilPicture.jpg" className={styles.profilPictureIcon} />
              </div>  
              ProfilPicture
              Chloé
              Daaafunk          
                  <div>{/* Il y a 5 heures */}</div>
              </div>
              <div className={styles.tweetContent}>
                  CONTENT
              </div>
              <div className={styles.tweetLike}>
                  LIKE
              </div>
          </div>

        </div>

      </div>


      {/* HOME - RIGHT */}
        <div className={styles.homeRight}>
          <h2 className={styles.title}>Trends</h2>
          <div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
