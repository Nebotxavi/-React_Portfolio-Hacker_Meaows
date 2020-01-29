import React, { useContext } from "react";

import { UserContext } from "../../App";
import Svg from "./svgItems";

const SearchBar = () => {
  const { query, setQuery, setCurrentPage } = useContext(UserContext);

  return (
    <div className="navItem searchBar">
      <span className="searchIcon">
        <Svg request={"searchIcon"} />
      </span>
      <input
        className="inputBar"
        placeholder="Search stories by title, url or author..."
        value={query}
        onChange={e => {
          setCurrentPage(0);
          setQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
