import React from "react";
import "./ExploreScreen.css";
import { Link } from "react-router-dom";

export default class Explore extends React.Component {
  render() {
    return (
      <div className="container">
        <text>Explore Screen</text>
        <Link to={{ pathname: "/" }}>
          <text>back to home</text>
        </Link>
      </div>
    );
  }
}
