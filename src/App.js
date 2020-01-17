import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import FootBar from "./components/footBar";
import NavBar from "./components/navBar";
import Content from "./components/content";
import Settings from "./components/settings";

export const UserContext = React.createContext();
export const SettingsContext = React.createContext();

function App() {
  const defaultOptions = JSON.parse(localStorage.getItem("HACKER MEOWS"));
  const { hitsPerPage, defaultType, defaultSort, defaultDateRange } = {
    ...defaultOptions
  };

  const [currentPage, setCurrentPage] = useState(0);
  const [query, setQuery] = useState("");

  // Set variables depending on the localStorage cache
  const [itemsPerPage, setItemsPerPage] = useState(hitsPerPage || 30);
  const [searchBy, setSearchBy] = useState(defaultSort || "Date");
  const [searchType, setSearchType] = useState(defaultType || "Stories");
  const [searchForTime, setSearchForTime] = useState(
    defaultDateRange || "All time"
  );

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
        <SettingsContext.Provider
          value={{
            itemsPerPage,
            setItemsPerPage,
            searchBy,
            setSearchBy,
            searchType,
            setSearchType,
            searchForTime,
            setSearchForTime
          }}
        >
          <NavBar />
          <Switch>
            <Route path="/settings" component={Settings} />
            <Route path="/" component={Content} />
          </Switch>
          <FootBar />
        </SettingsContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
