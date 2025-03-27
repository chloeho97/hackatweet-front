import styles from '../styles/Home.module.css';
import Tweet from './Tweet'
/* import { useSelector } from 'react-redux';
 */
function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Tweet />
      </main>
    </div>
  );
}

export default Home;
