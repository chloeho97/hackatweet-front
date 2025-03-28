import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/users";
import styles from "../styles/SignUp.module.css";

function signUp() {
  const dispatch = useDispatch();

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signUpUsername,
        firstname: signUpFirstname,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              username: signUpUsername,
              firstname: signUpFirstname,
              token: data.token,
            })
          );
          setSignUpUsername("");
          setSignUpFirstname("");
          setSignUpPassword("");
        }
      });
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerSection}>
        <img src="/icon.png" alt="icon_img" className={styles.icon} />
        <p className={styles.titleModal}>Create your Hackatweet account</p>
        <div className={styles.input}>
          <input
            className={styles.inputElement}
            type="text"
            placeholder="Username"
            id="signUpUsername"
            onChange={(e) => setSignUpUsername(e.target.value)}
            value={signUpUsername}
          />
          <input
            className={styles.inputElement}
            type="text"
            placeholder="Firstname"
            id="signUpFirstname"
            onChange={(e) => setSignUpFirstname(e.target.value)}
            value={signUpFirstname}
          />
          <input
            className={styles.inputElement}
            type="password"
            placeholder="Password"
            id="signUpPassword"
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
          />
        </div>
        <div className={styles.btnContainer}>
          <button
            id="register"
            className={styles.btnRegister}
            onClick={() => handleRegister()}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default signUp;
