import React, { useContext } from "react";

import { UserContext } from "../../App";

const SearchBar = () => {
  const { query, setQuery, setCurrentPage } = useContext(UserContext);

  return (
    <div className="navItem searchBar">
      <input
        className="inputBar"
        placeholder="Search here..."
        value={query}
        onChange={e => {
          setCurrentPage(0);
          setQuery(e.target.value.toLowerCase());
        }}
      />
    </div>
  );
};

export default SearchBar;
