import React from "react";
import "./DetailScreen.css";
import { Link } from "react-router-dom";

export default class Detail extends React.Component {
  render() {
    return (
      <div className="container">
        <text>Detail Screen</text>
        <Link to={{ pathname: "/" }}>
          <text>back to home</text>
        </Link>
      </div>
    );
  }
}
