import styles from '../styles/Tweet.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTweet } from '../reducers/tweets';

function Tweet() {

  const dispatch = useDispatch();


  const username =  useSelector((state) => state.users.value.username);
  const firstname =  useSelector((state) => state.users.value.firstname);
  const token =  useSelector((state) => state.users.value.token);


    const [newTweet, setNewTweet] = useState('');

    const handleTweet = () => {
		dispatch(addNewTweet({tweetContent : newTweet, firstname : firstname , username : username, token : token }))
    setNewTweet('');
	};

    let countCaracter = () => {
        return newTweet.length;
    };


  return (
    <div>
      <main className={styles.main}>

        
        <div className={styles.newTweetContainer}>
          <textarea 
          className={styles.tweetBar} 
          type="text" 
          placeholder="What's up" 
          id="newTweet"  
          maxLength="280" 
          style={{ resize: 'both', overflow: 'auto' }} 
          onChange={(e) => setNewTweet(e.target.value)} value={newTweet} />
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
