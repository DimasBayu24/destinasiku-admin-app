import React from "react";
import "./LoginScreen.css";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <text>Login Screen</text>
        <Link to={{ pathname: "/forgot-pass" }}>
          <text>forgot password</text>
        </Link>
        <Link to={{ pathname: "/register" }}>
          <text>register</text>
        </Link>
        <Link to={{ pathname: "/" }}>
          <text>to home</text>
        </Link>
      </div>
    );
  }
}
