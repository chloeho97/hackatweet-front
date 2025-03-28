import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/users";
import styles from "../styles/SignIn.module.css";

function SignIn() {
  const dispatch = useDispatch();

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              username: signInUsername,
              firstname: data.firstname,
              token: data.token,
            })
          );
          setSignInUsername("");
          setSignInPassword("");
        }
      });
  };

  return (
    <div>
      <div className={styles.registerSection}>
        <img src="/icon.png" alt="icon_img" className={styles.icon} />
        <p className={styles.titleModal}>Connect to your Hackatweet account</p>
        <div className={styles.input}>
          <input
            className={styles.inputElement}
            type="text"
            placeholder="Username"
            id="signInUsername"
            onChange={(e) => setSignInUsername(e.target.value)}
            value={signInUsername}
          />
          <input
            className={styles.inputElement}
            type="password"
            placeholder="Password"
            id="signInPassword"
            onChange={(e) => setSignInPassword(e.target.value)}
            value={signInPassword}
          />
        </div>
        <div className={styles.btnContainer}>
          <button
            id="connection"
            className={styles.btnRegister}
            onClick={() => handleConnection()}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
