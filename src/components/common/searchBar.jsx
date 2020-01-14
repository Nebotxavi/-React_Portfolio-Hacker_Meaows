import React, { useContext } from "react";

import { UserContext } from "../../App";

const SearchBar = () => {
  const { query, setQuery, setCurrentPage } = useContext(UserContext);

  return (
    <div className="navItem searchBar">
      <span className="searchIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </span>
      <input
        className="inputBar"
        placeholder="Search stories by title, url or author..."
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
