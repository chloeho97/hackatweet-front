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

      <div className={styles.homeLeft}>
      <img className={styles.logo} src='./twitter-logo.png' />
      </div>

      <div className={styles.homeCenter}>

        <div>
          <Tweet />
        </div>
        
        <div>
      {/* {lastTweetsComponents} */}
      <p>CENTER PART 2</p>
        </div>

      </div>

        <div className={styles.homeRight}>
        <h2>Trends</h2>
        </div>
      </main>
    </div>
  );
}

export default Home;
