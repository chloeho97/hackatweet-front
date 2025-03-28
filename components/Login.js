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
                    src="/background_img.jpg"
                    alt="background_img"
                    className={styles.image}
                  /> 
                </div>
                <div className={styles.elementContainer}>
                  <h1 className={styles.underline}>See What's happening</h1>
                  <h2 className={styles.h2}>Join Hackatweet today.</h2>

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
                  onClick={() => showSignInModal()}>
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
      </div>
    );
  }
}

export default Login;
