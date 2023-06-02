import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input className={css(styles.input)} type="email" name="email" id="email" placeholder="Enter your email" />
          <label htmlFor="password">Password:</label>
          <input className={css(styles.input)} type="password" name="password" id="password" placeholder="Enter your password" />
          <button type="button">OK</button>

        </form>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({

  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
  },

  input: {
    margin: "10px",
  },
});

export default Login;
