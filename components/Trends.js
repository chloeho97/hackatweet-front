import styles from "../styles/Trends.module.css";

function Trends({ tweets }) {
  // const handleClick = (hashtag) => {
  //   `/hashtag/${hashtag.replace("#", "")}`; // Supprime # pour l'URL
  // };

  const hashtagCounts = tweets.reduce((acc, tweet) => {
    const hashtags =
      typeof tweet.tweetContent === "string"
        ? tweet.tweetContent.match(/#\w+/g) || []
        : [];

    hashtags.forEach((hashtag) => {
      acc[hashtag] = (acc[hashtag] || 0) + 1;
    });
    return acc;
  }, {});

  // Tri des hashtags par fréquence d'utilisation
  const sortedHashtags = Object.entries(hashtagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5); // On affiche seulement les 5 premiers trends

  return (
    <div className={styles.trendContainer}>
      <ul>
        {sortedHashtags.map(([hashtag, count]) => (
          <li key={hashtag} className={styles.trendsBlock}>
            <span
              className={styles.trendsHashtag}
              onClick={() => handleClick(hashtag)}
            >
              {hashtag}{" "}
            </span>
            <div className={styles.trendsCount}>{count} tweets</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trends;
