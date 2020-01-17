import React, { useState, useContext } from "react";

import Select from "./common/select";

import { SettingsContext } from "../App";

const Settings = () => {
  const {
    itemsPerPage,
    setItemsPerPage,
    searchBy,
    searchType,
    searchForTime
  } = useContext(SettingsContext);

  const [settingsSearchBy, setSettingsSearchBy] = useState(searchBy);
  const [settingsSearchType, setSettingsSearchType] = useState(searchType);
  const [settingsSearchForTime, setSettingsSearchForTime] = useState(
    searchForTime
  );

  const displayInputs = [
    {
      label: "Hits per page",
      name: "hitsPerPage",
      value: itemsPerPage,
      options: [10, 20, 30, 50],
      onChangeAction: target => {
        setItemsPerPage(target.value);
        setLocalStorage(target);
      }
    }
  ];

  const rankingInputs = [
    {
      label: "Default Type",
      name: "defaultType",
      value: settingsSearchType,
      options: ["All", "Stories", "Comments"],
      onChangeAction: target => {
        setSettingsSearchType(target.value);
        setLocalStorage(target);
      }
    },
    {
      name: "defaultSort",
      label: "Default Sort",
      value: settingsSearchBy,
      options: ["Date", "Popularity"],
      onChangeAction: target => {
        setSettingsSearchBy(target.value);
        setLocalStorage(target);
      }
    },
    {
      name: "defaultDateRange",
      label: "Default date range",
      value: settingsSearchForTime,
      options: ["All time", "Last 24h", "Past Week", "Past Month", "Past Year"],
      onChangeAction: target => {
        setSettingsSearchForTime(target.value);
        setLocalStorage(target);
      }
    }
  ];

  function setLocalStorage(target) {
    const currentStorage = JSON.parse(localStorage.getItem("HACKER MEOWS"));
    const newItem = { [target.name]: target.value };
    const updatedStorage = currentStorage
      ? { ...currentStorage, ...newItem }
      : newItem;
    localStorage.setItem("HACKER MEOWS", JSON.stringify(updatedStorage));
  }

  return (
    <div className="settings">
      <p>Settings</p>
      <form>
        <div className="display-box">
          <h2>Display options</h2>
          <div className="display-settings">
            {displayInputs.map((input, ind) => (
              <Select inputs={input} key={ind} />
            ))}
          </div>
          <div className="ranking-box">
            <h2>Ranking options</h2>
            <div className="ranking-settings">
              {rankingInputs.map((input, ind) => (
                <Select inputs={input} key={ind} />
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
