import styles from "../styles/login.module.css";
import { useSelector } from "react-redux";

function Login() {
  const user = useSelector((state) => state.user.value);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showSignUpModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const showSignInModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  let userSection;
  if (user.token) {
    userSection = (
      <div className={styles.logoutSection}>
        <p>Welcome {user.username} / </p>
      </div>
    );
  } else {
    if (isModalVisible) {
      userSection = (
        <div className={styles.headerIcons}>
          <FontAwesomeIcon
            onClick={showModal}
            className={styles.userSection}
            icon={faXmark}
          />
        </div>
      );
    } else {
      userSection = (
        <div className={styles.headerIcons}>
          <FontAwesomeIcon
            onClick={showModal}
            className={styles.userSection}
            icon={faUser}
          />
        </div>
      );
    }

    return (
      <div className={styles.loginRight}>
        <div className={styles.logoContainer}>
          <h1 className={styles.h1}>See What's happening</h1>
          <h2 className={styles.h2}>Join Hackatweet today.</h2>
        </div>
        <button id="register" onClick={() => showSignUpModal()}>
          Sign up
        </button>

        <div> Already have account ?</div>

        <button id="connection" onClick={() => showSignInModal()}>
          Sign in
        </button>
      </div>
    );
  }
}

export default Login;
