import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import { logout } from "../reducers/users";

/* import { useSelector } from 'react-redux';
 */

function Home() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  // Utilisé pour afficher soit la page Login soit la homepage
  const isConnected = useSelector((state) => state.users.value.token);

  // Utilisé pour afficher les infos User en bas à gauche
  const username = useSelector((state) => state.users.value.username);
  const firstname = useSelector((state) => state.users.value.firstname);

  const tweets = useSelector((state) => state.tweets.value);

  // Props pour afficher les derniers tweets
  const lastTweetsComponents = tweets.map((data, i) => {
    return (
      <LastTweets
        key={i}
        firstname={data.firstname}
        username={data.username}
        id={data.id}
        profilPicture={data.profilPicture}
        tweetContent={data.tweetContent}
        token={data.token}
      />
    );
  });

  return (
    <div>
      {/*   Si client pas connecté, donc pas de token, affichage de la page SignIn ou SignUp. Si connecté, affichage homepage avec tweet */}

      {!isConnected ? (
        <Login />
      ) : (
        <main className={styles.main}>
          {/* HOME - LEFT */}

          <div className={styles.homeLeft}>
            <div>
              <img className={styles.logo} src="./twitter-logo.png" />
            </div>

            <div className={styles.userSection}>
              <div className={styles.userContent}>
                <div className={styles.profilIcon}>
                  <img
                    className={styles.profilPictureIcon}
                    src="./profilPicture.jpg"
                  />
                </div>
                <div className={styles.userInfo}>
                  <div className={styles.userFirstname}>{firstname}</div>
                  <div className={styles.userUsername}>@ {username}</div>
                </div>
              </div>
              <button
                className={styles.btnLogout}
                id="logout"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            </div>
          </div>

          {/* HOME - CENTER */}
          <div className={styles.homeCenter}>
            <h2 className={styles.title}>Home</h2>

            <div>
              <Tweet />
            </div>

            <div>{lastTweetsComponents}</div>
          </div>

          {/* HOME - RIGHT */}
          <div className={styles.homeRight}>
            <h2 className={styles.title}>Trends</h2>
            <div></div>
          </div>
        </main>
      )}
    </div>
  );
}

export default Home;
