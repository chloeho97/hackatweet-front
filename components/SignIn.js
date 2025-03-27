import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import styles from "../styles/login.module.css";

function SignIn() {
  const dispatch = useDispatch();

  const [signInUsername, setSignInUsername] = useState("");
  const [signUpFirstname, setSignUpFirstname] = useState("");
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
              firstname: data.token,
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
        <p>Sign-in</p>
        <input
          type="text"
          placeholder="Username"
          id="signInUsername"
          onChange={(e) => setSignInUsername(e.target.value)}
          value={signInUsername}
        />
        <input
          type="password"
          placeholder="Password"
          id="signInPassword"
          onChange={(e) => setSignInPassword(e.target.value)}
          value={signInPassword}
        />
        <button id="connection" onClick={() => handleConnection()}>
          Connect
        </button>
      </div>
    </div>
  );
}

export default SignIn;
