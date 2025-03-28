import styles from "../styles/Hashtag.module.css";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import { logout } from "../reducers/users";
import Trends from "./Trends";
// import { useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Hashtag from "./Hashtag";
import LastTweets from "./LastTweets";

function Hashtag() {
  const { hashtag } = useParams(); // Récupère le hashtag depuis l'URL
  const filteredTweets = tweets.filter((tweet) =>
    tweet.tweetContent.includes(`#${hashtag}`)
  );

  const dispatch = useDispatch();
  // const [selectedHashtag, setSelectedHashtag] = useState(null);

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
            <h2 className={styles.title}>Hashtag</h2>
            <div>
              <h2>Tweets contenant #{hashtag}</h2>
              {filteredTweets.length > 0 ? (
                filteredTweets.map((tweet, i) => (
                  <LastTweets
                    key={i}
                    firstname={tweet.firstname}
                    username={tweet.username}
                    id={tweet.id}
                    profilPicture={tweet.profilPicture}
                    tweetContent={tweet.tweetContent}
                    token={tweet.token}
                  />
                ))
              ) : (
                <p>Aucun tweet trouvé avec ce hashtag.</p>
              )}
            </div>

            {/* <div>
              <Router>
                <Routes>
                  <Route path="/" element={<Trends tweets={tweets} />} />
                  <Route
                    path="/hashtag/:hashtag"
                    element={<Hashtag tweets={tweets} />}
                  />
                </Routes>
              </Router>
            </div> */}

            <div>{lastTweetsComponents}</div>
          </div>

          {/* HOME - RIGHT */}
          <div className={styles.homeRight}>
            <h2 className={styles.title}>Trends</h2>
            <div>
              <Trends tweets={tweets} />
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default Hashtag;
