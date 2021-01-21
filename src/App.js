import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword"
import ResetPassword from "./components/ResetPassword"

import "./App.css";

const App = () => (
  <>    
    <Route exact path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/home" component={Dashboard} />
    <Route exact path="/forgotpassword" component={ForgotPassword} />
    <Route exact path="/resetPassword" component={ResetPassword} />

  </>
);

export default App;
