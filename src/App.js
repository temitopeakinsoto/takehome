import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  Login,
  Register,
  Dashboard,
  ForgotPassword,
  ResetPassword,
} from "./components";

import "./App.css";

const App = () => (
  <>
    <Route exact path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route
      path="/home"
      render={props => withAuthCheck(Dashboard, props) }
    />
    <Route exact path="/forgotpassword" component={ForgotPassword} />
    <Route exact path="/resetPassword" component={ResetPassword} />
  </>
);

function withAuthCheck(Component, props) {
  if(localStorage.getItem('token')){
    return <Component {...props} />
  }
  return <Redirect to='/' />
}

export default App;
