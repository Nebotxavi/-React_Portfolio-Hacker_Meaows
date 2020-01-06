import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/navBar";
import News from "./components/news";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/news" component={News} />
      </Switch>
    </div>
  );
}

export default App;
