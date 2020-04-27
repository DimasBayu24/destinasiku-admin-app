import React from "react";
import "./RegisterScreen.css";
import { Link } from "react-router-dom";

export default class Register extends React.Component {
  render() {
    return (
      <div className="container">
        <text>Register Screen</text>
        <Link to={{ pathname: "/login" }}>
          <text>back to login</text>
        </Link>
      </div>
    );
  }
}
