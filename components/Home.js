import styles from '../styles/Home.module.css';
import Tweet from './Tweet'
import LastTweets from './LastTweets'
import { useSelector } from 'react-redux';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

/* import { useSelector } from 'react-redux';
 */


function Home() {

/*   const dispatch = useDispatch(); */
/* 
  const isConnected = useSelector((state) => state.user.value); */

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
