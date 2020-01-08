import React from "react";

const SearchBar = ({ query, setQuery, setCurrentGenre, setCurrentPage }) => {
  return (
    <div className="navItem searchBar">
      <input
        className="inputBar"
        placeholder="Search here..."
        value={query}
        onChange={e => {
          setCurrentGenre("");
          setCurrentPage(1);
          setQuery(e.target.value.toLowerCase());
        }}
      />
    </div>
  );
};

export default SearchBar;
