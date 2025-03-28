import styles from "../styles/Login.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "antd";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Login() {
  const user = useSelector((state) => state.users.value);

  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

  const showSignUpModal = () => {
    setIsSignUpModalVisible(true);
  };

  const showSignInModal = () => {
    setIsSignInModalVisible(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalVisible(false);
  };

  const closeSignInModal = () => {
    setIsSignInModalVisible(false);
  };

  let signupModalContent;
  if (!user.token) {
    signupModalContent = <SignUp />;

    let signInModalContent;
    if (!user.token) {
      signInModalContent = <SignIn />;
    }

    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src="/background_img.png"
            alt="background_img"
            className={styles.image}
          />
        </div>
        <div className={styles.elementContainer}>
          <img src="/icon.png" alt="icon_img" className={styles.icon} />
          <h1 className={styles.underline}>See what's happening</h1>
          <h2 className={styles.h2}>Join Hackatweet today.</h2>

          <div className={styles.elementSign}>
            <button
              id="register"
              className={styles.registerBtn}
              onClick={() => showSignUpModal()}
            >
              Sign up
            </button>
            <div> Already have account ?</div>

            <button
              id="connection"
              className={styles.signInBtn}
              onClick={() => showSignInModal()}
            >
              Sign in
            </button>
          </div>

          {isSignUpModalVisible && (
            <div id="react-modals">
              <Modal
                getContainer="#react-modals"
                className={styles.modal}
                visible={isSignUpModalVisible}
                footer={null}
                closable={true} // Affiche une croix par défaut pour fermer
                onCancel={closeSignUpModal} // Ferme la modal
              >
                {signupModalContent}
              </Modal>
            </div>
          )}

          {isSignInModalVisible && (
            <div id="react-modals">
              <Modal
                getContainer="#react-modals"
                className={styles.modal}
                visible={isSignInModalVisible}
                footer={null}
                closable={true} // Affiche une croix par défaut pour fermer
                onCancel={closeSignInModal} // Ferme la modal
                style={{
                  padding: "0", // Ajuste ou supprime le padding
                }}
              >
                {signInModalContent}
              </Modal>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
