import React, { useState } from "react";
import state from "./store/store.js";
import { connect } from "react-redux";
import { dispatch } from "redux";
import * as action from "./actions";
import "./App.css";

const styley = {
  padding: "1rem",
  margin: "3rem 1rem",
};

function App(props) {
  const [likes, setLikes] = useState(0);

  function Increment(e) {
    // dispatch(action.increase);
  }

  function Decrement(e) {
    setLikes((prev) => prev - 1);
  }

  function IncEven(e) {
    if (likes % 2 === 0) setLikes((prev) => prev + 1);
  }

  function IncAsync(e) {
    setTimeout(() => {
      setLikes((prev) => prev + 1);
    }, 1000);
  }
  return (
    <div className="App">
      <h2>
        Hello there, No Internet Try: Checking the network cables, modem and
        router Reconnecting to Wi-Fi Running Windows Network Diagnostics
      </h2>
      <h1 style={{ marginTop: "5rem" }}>Likes: {likes}</h1>

      <div style={{ display: "flex" }}>
        <button onClick={Increment} style={styley}>
          Up
        </button>
        <button onClick={Decrement} style={styley}>
          Down
        </button>
        <button onClick={IncEven} style={styley}>
          Up Even
        </button>
        <button onClick={IncAsync} style={styley}>
          Async Up
        </button>
      </div>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {

//   }
// }

export default connect((state) => state, {})(App);
