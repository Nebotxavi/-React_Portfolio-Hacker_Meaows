import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/navBar";
import Content from "./components/content";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={Content} />
      </Switch>
    </div>
  );
}

export default App;
