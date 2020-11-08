import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppSecure from "./AppSecure";
import HomePage from "./components/HomePage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/app" component={AppSecure} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
