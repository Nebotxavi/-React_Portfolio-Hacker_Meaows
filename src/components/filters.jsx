import React, { useContext } from "react";

import Select from "./common/select";

import { SettingsContext } from "../App";

const Filters = () => {
  const {
    searchBy,
    setSearchBy,
    searchType,
    setSearchType,
    searchForTime,
    setSearchForTime
  } = useContext(SettingsContext);

  const inputs = [
    {
      name: "Search",
      value: searchType,
      options: ["All", "Stories", "Comments"],
      onChangeAction: target => setSearchType(target.value)
    },
    {
      name: "by",
      value: searchBy,
      options: ["Date", "Popularity"],
      onChangeAction: target => setSearchBy(target.value)
    },
    {
      name: "for",
      value: searchForTime,
      options: [
        "All time",
        "Last 24h",
        "Past Week",
        "Past Month",
        "Past Year",
        "Custom range"
      ],
      onChangeAction: target => setSearchForTime(target.value)
    }
  ];

  return (
    <div className="filters-bar">
      <div className="filters">
        {inputs.map((input, ind) => (
          <Select inputs={input} requireSvg={true} key={ind} />
        ))}
      </div>

      <div className="share-icon">
        <svg
          className="clickable"
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
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </div>
    </div>
  );
};

export default Filters;
