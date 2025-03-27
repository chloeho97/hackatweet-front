import styles from "../styles/login.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "antd";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Image from "next/image";

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

  let signupModalContent;
  if (!user.token) {
    signupModalContent = <SignUp />;

    let signInModalContent;
    if (!user.token) {
      signInModalContent = <SignIn />;
    }

    return (
      <div className={styles.loginRight}>
        <div className={styles.slider}>
          <Image src="/background_img.jpg" alt="background_img" layout="fill" />
        </div>
        <div className={styles.elementContainer}>
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
        {isSignUpModalVisible && (
          <div id="react-modals">
            <Modal
              getContainer="#react-modals"
              className={styles.modal}
              visible={isSignUpModalVisible}
              closable={false}
              footer={null}
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
              closable={false}
              footer={null}
            >
              {signInModalContent}
            </Modal>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
