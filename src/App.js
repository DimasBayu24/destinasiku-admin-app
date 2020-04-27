import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Auth/LoginScreen";
import ForgotPassword from "./Pages/Auth/ForgotPasswordScreen";
import Register from "./Pages/Auth/RegisterScreen";

import Home from "./Pages/Main/HomeScreen";
import Detail from "./Pages/Main/DetailScreen";
import Explore from "./Pages/Main/ExploreScreen";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/forgot-pass">
            <ForgotPassword />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
