import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import FootBar from "./components/footBar";
import NavBar from "./components/navBar";
import Content from "./components/content";

export const UserContext = React.createContext();

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          query,
          setQuery,
          currentPage,
          setCurrentPage
        }}
      >
        <NavBar />
        <Switch>
          <Route path="/" component={Content} />
        </Switch>
        <FootBar />
      </UserContext.Provider>
    </div>
  );
}

export default App;
