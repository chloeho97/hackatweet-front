import { useRouter } from "next/router";
import HashtagPage from "../../components/Hashtag";

export default function Hashtag() {
  const router = useRouter();
  const { hashtag } = router.query;

  if (!hashtag) {
    // Affiche un état de chargement si le paramètre n'est pas encore disponible
    return <h1>Loading...</h1>;
  }

  return <HashtagPage hashtag={hashtag} />;
}
