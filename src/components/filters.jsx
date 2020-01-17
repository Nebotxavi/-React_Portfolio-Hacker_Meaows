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
    <div className="filters">
      {inputs.map((input, ind) => (
        <Select inputs={input} requireSvg={true} key={ind} />
      ))}
      {/* <Select inputs={[inputs.searchInput]} />
      <Select inputs={[inputs.byInput]} />
      <Select inputs={[inputs.forInput]} /> */}
    </div>
  );
};

export default Filters;
