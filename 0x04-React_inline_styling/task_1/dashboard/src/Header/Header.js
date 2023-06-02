import React from "react";
import { StyleSheet, css} from "aphrodite";
import logo from "../assets/holberton-logo.jpg";


function Header() {
  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e054b",
  },

  img: {
    width: "200px",
    height: "200px",
  },
});
export default Header;
