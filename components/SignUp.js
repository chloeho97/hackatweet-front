import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import styles from "../styles/login.module.css";

function SignUp() {
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
        <p>Sign-up</p>
        <input
          type="text"
          placeholder="Username"
          id="signUpUsername"
          onChange={(e) => setSignUpUsername(e.target.value)}
          value={signUpUsername}
        />
        <input
          type="password"
          placeholder="Password"
          id="signUpPassword"
          onChange={(e) => setSignUpPassword(e.target.value)}
          value={signUpPassword}
        />
        <button id="register" onClick={() => handleRegister()}>
          Register
        </button>
      </div>
    </div>
  );
}

export default SignUp;
