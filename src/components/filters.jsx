import React from "react";

import Select from "./common/select";

const Filters = ({
  searchBy,
  setSearchBy,
  searchType,
  setSearchType,
  searchForTime,
  setSearchForTime
}) => {
  const inputs = {
    searchInput: {
      name: "Search",
      value: searchType,
      options: ["All", "Stories", "Comments"]
    },
    byInput: {
      name: "by",
      value: searchBy,
      options: ["Date", "Popularity"]
    },
    forInput: {
      name: "for",
      value: searchForTime,
      options: [
        "All time",
        "Last 24h",
        "Past Week",
        "Past Month",
        "Past Year",
        "Custom range"
      ]
    }
  };

  return (
    <div className="filters">
      <Select inputs={[inputs.searchInput]} setItem={setSearchType} />
      <Select inputs={[inputs.byInput]} setItem={setSearchBy} />
      <Select inputs={[inputs.forInput]} setItem={setSearchForTime} />
    </div>
  );
};

export default Filters;
