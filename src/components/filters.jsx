import React, { useContext } from "react";

import Dropdown from "./common/dropdown";
import ShareMenu from "./shareMenu";

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
      onChangeAction: target => {
        setSearchType(target.innerHTML);
      }
    },
    {
      name: "by",
      value: searchBy,
      options: ["Popularity", "Date"],
      onChangeAction: target => setSearchBy(target.innerHTML)
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
      onChangeAction: target => setSearchForTime(target.innerHTML)
    }
  ];

  return (
    <div className="filters-bar">
      <div className="filters">
        {inputs.map((input, ind) => (
          <Dropdown inputs={input} key={ind} />
        ))}
      </div>

      <div className="share-icon">
        <ShareMenu />
      </div>
    </div>
  );
};

export default Filters;
