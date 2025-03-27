import styles from '../styles/Tweet.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTweet } from '../reducers/tweets';

function Tweet() {

  const dispatch = useDispatch();
	const tweets = useSelector((state) => state.tweets.value);

    const [newTweet, setNewTweet] = useState('');

    const handleTweet = () => {
		dispatch(addNewTweet({tweetContent : newTweet, firstname : firstname , username : username, profilPicture : profilPicture }))
    setNewTweet('');
	};

    let countCaracter = () => {
        return newTweet.length;
    };


  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          HOME
        </h1>
        
        <div className={styles.newTweetContainer}>
          <input className={styles.tweetBar} type="text" placeholder="What's up" id="newTweet"  maxlength="280" onChange={(e) => setNewTweet(e.target.value)} value={newTweet} />
          <div className={styles.barBottom}>
            <p> {countCaracter()}/ 280</p>
            <button className={styles.btnTweet} id="addNewTweet" onClick={() => handleTweet()}>Tweet</button>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Tweet;
