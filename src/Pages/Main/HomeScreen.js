import React from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <text>Home Screen</text>
        <Link to={{ pathname: "/explore" }}>
          <text>to Explore</text>
        </Link>
        <Link to={{ pathname: "/detail" }}>
          <text>to Detail</text>
        </Link>
        <Link to={{ pathname: "/login" }}>
          <text>logout</text>
        </Link>
      </div>
    );
  }
}
