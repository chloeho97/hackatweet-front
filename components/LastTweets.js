import styles from "../styles/LastTweets.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { likedTweet } from "../reducers/likedTweet";
import { removeTweet } from "../reducers/tweets";
import Link from "next/link";

function LastTweets(props) {
  const dispatch = useDispatch();

  // Fonctionnalité de like
  const tweetsLiked = useSelector((state) => state.likedTweet.value);
  const isLiked = tweetsLiked.some((tweet) => tweet.id === props.id);
  const handleLike = () => {
    dispatch(likedTweet({ id: props.id }));
  };

  // Fonctionnalité de suppression de tweet

  const tokenActualUser = useSelector((state) => state.users.value.token);

  const rightToRemove = () => {
    if (tokenActualUser === props.token) {
      return true;
    } else {
      return false;
    }
  };

  // Permet de ne pas supprimer l'ensemble des tweets faits par un même user (uniquement le tweet sur lequel il clique)
  const handleRemove = () => {
    dispatch(removeTweet({ id: props.id, token: props.token }));
  };

  // Fonction pour formater les hashtags dans le contenu des tweets
  const formatTweetContent = (text) => {
    const hashtagRegex = /#\w+/g; // Détection des hashtags
    return text.split(/(\s+)/).map((word, index) => {
      if (hashtagRegex.test(word)) {
        const hashtag = word.replace("#", ""); // Supprime le # pour l'URL
        return (
          <Link
            key={index}
            href={`/hashtag/${hashtag}`}
            passHref // Passe explicitement le href à l'élément enfant
          >
            <a className={styles.hashtag}>{word}</a>
          </Link>
        );
      }
      return word + " "; // Conserve le texte normal
    });
  };

  // Afficher de depuis quand le tweet a été posté
  const formatTimeSince = (timestamp) => {
    const now = Date.now(); // Obtenir le temps actuel en millisecondes
    const timeSince = now - timestamp; // Différence entre maintenant et le timestamp

    const minutes = Math.floor(timeSince / 60000);
    const hours = Math.floor(minutes / 60);

    if (timeSince < 60000) {
      // Moins d'une minute
      return ` a few seconds`;
    }
    if (timeSince < 3600000) {
      // Moins d'une heure
      return `${minutes} minutes`;
    } else {
      return `${hours} hours`; // Arrondi à l'heure inférieure
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.headerTweet}>
        <div className={styles.profilIcon}>
          <img src="./profilPicture.jpg" className={styles.profilPictureIcon} />
        </div>
        <div className={styles.firstname}>{props.firstname} </div>
        <div className={styles.username}>@{props.username} </div>
        <div className={styles.timestamp}>
          <span>•</span>
          {formatTimeSince(props.id)}
        </div>
      </div>

      <div className={styles.tweetContent}>
        {formatTweetContent(props.tweetContent)}
      </div>

      <div className={styles.tweetLike}>
        <span>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => handleLike()}
            className={isLiked ? styles.liked : styles.unliked}
            style={{ cursor: "pointer" }}
          />{" "}
        </span>

        {/*  Affichage de l'icone 'trash' si le user connecté est celui qui a twitté  */}
        {rightToRemove() ? (
          <span>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => handleRemove()}
              style={{ cursor: "pointer" }}
            />{" "}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default LastTweets;
