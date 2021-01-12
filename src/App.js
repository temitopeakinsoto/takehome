import React, { useState } from "react";
import { Route, Router } from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

const App = () => (
  <>
    <Route exact path="/" component={Login} />
    <Route path="/register" component={Register} />
  </>
);

export default App;
