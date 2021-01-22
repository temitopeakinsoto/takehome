import React from "react";
import { Route } from "react-router-dom";
import { Login, Register, Dashboard, ForgotPassword, ResetPassword } from "./components";


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
