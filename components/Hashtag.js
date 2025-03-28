import styles from "../styles/Hashtag.module.css";
import LastTweets from "./LastTweets";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/users";
import Trends from "./Trends";

function HashtagPage({ hashtag }) {
  const dispatch = useDispatch();

  // Données utilisateur
  const username = useSelector((state) => state.users.value.username);
  const firstname = useSelector((state) => state.users.value.firstname);

  // Liste des tweets stockée dans Redux
  const tweets = useSelector((state) => state.tweets.value);

  console.log("Tweets :", tweets);
  console.log("Hashtag :", hashtag);

  // Filtrer les tweets contenant le hashtag
  const filteredTweets = tweets.filter((tweet) =>
    tweet.tweetContent.toLowerCase().includes(`#${hashtag?.toLowerCase()}`)
  );

  // Fonction de déconnexion
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <main className={styles.main}>
        {/* HOME - LEFT */}
        <div className={styles.homeLeft}>
          <div>
            <img
              className={styles.logo}
              src="/icon.png"
              alt="Logo"
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = "/")} // Retour à la page d'accueil
            />
          </div>
          <div className={styles.userSection}>
            <div className={styles.userContent}>
              <div className={styles.profilIcon}>
                <img
                  className={styles.profilPictureIcon}
                  src="/profilPicture.jpg"
                  alt="User"
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
        </div>

        {/* HOME - RIGHT */}
        <div className={styles.homeRight}>
          <h2 className={styles.title}>Trends</h2>
          <div>
            <Trends tweets={tweets} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HashtagPage;
