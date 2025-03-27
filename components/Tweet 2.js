import styles from '../styles/Tweet.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTweet } from '../reducers/tweets';

function Tweet() {

    const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

    const [newTweet, setNewTweet] = useState('');

    const handleTweet = () => {
		dispatch(addNewTweet(newTweet))
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
        <input type="text" placeholder="What's up" id="newTweet"  maxlength="280" onChange={(e) => setNewTweet(e.target.value)} value={newTweet} />
        <div>
        <p> {countCaracter()}/ 280</p>
        <button id="addNewTweet" onClick={() => handleTweet()}>Tweet</button>
        </div>
      </main>
    </div>
  );
}

export default Tweet;
