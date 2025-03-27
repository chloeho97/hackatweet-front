import styles from "../styles/login.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";
import SignUp from "./SignUp";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.value);

  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

  // const [signUpUsername, setSignUpUsername] = useState("");
  // const [signUpFirstname, setSignUpFirstname] = useState("");
  // const [signUpPassword, setSignUpPassword] = useState("");

  // const [signInUsername, setSignInUsername] = useState("");
  // const [signInPassword, setSignInPassword] = useState("");

  const showSignUpModal = () => {
    setIsSignUpModalVisible(true);
  };

  const showSignInModal = () => {
    setIsSignInModalVisible(true);
  };

  if (!user.token) {
    //   let signInmodalContent;
    //   if (!user.token) {
    //     signInmodalContent = (
    //       <div className={styles.registerContainer}>
    //         <div className={styles.registerSection}>
    //           <p>Sign-up</p>
    //           <input
    //             type="text"
    //             placeholder="Username"
    //             id="signInUsername"
    //             onChange={(e) => setSignInUsername(e.target.value)}
    //             value={signUpUsername}
    //           />

    //           <input
    //             type="password"
    //             placeholder="Password"
    //             id="signInPassword"
    //             onChange={(e) => setSignInPassword(e.target.value)}
    //             value={signUpPassword}
    //           />
    //           <button id="register" onClick={() => handleRegister()}>
    //             Register
    //           </button>
    //         </div>
    //       </div>
    //     );

    let signupModalContent;
    if (!user.token) {
      signupModalContent = <SignUp />;

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

          {/* {isSignInModalVisible && (
            <div id="react-modals">
              <Modal
                getContainer="#react-modals"
                className={styles.modal}
                visible={isSignInModalVisible}
                closable={false}
                footer={null}
              >
                {signInmodalContent}
              </Modal>
            </div>
          )} */}
        </div>
      );
    }
  }
}

export default Login;
