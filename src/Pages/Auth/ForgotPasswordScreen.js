import React from "react";
import "./ForgotPasswordScreen.css";
import { Link } from "react-router-dom";

export default class ForgotPassword extends React.Component {
  render() {
    return (
      <div className="container">
        <text>Forgot Password Screen</text>
        <Link to={{ pathname: "/login" }}>
          <text>back to login</text>
        </Link>
      </div>
    );
  }
}
