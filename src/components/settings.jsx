import React, { useState, useContext } from "react";
import DisplayOptions from "./displayOptions";
import RankingOptions from "./rankingOptions";
import { SettingsContext } from "../App";

const Settings = ({ history }) => {
  const {
    itemsPerPage,
    setItemsPerPage,
    searchBy,
    searchType,
    searchForTime
  } = useContext(SettingsContext);

  // Initial values based on the localStorage OR the values from the content view filters
  const { defaultType, defaultSort, defaultDateRange } =
    JSON.parse(localStorage.getItem("HACKER MEOWS")) || {};

  const [settingsSearchBy, setSettingsSearchBy] = useState(
    defaultSort || searchBy
  );
  const [settingsSearchType, setSettingsSearchType] = useState(
    defaultType || searchType
  );
  const [settingsSearchForTime, setSettingsSearchForTime] = useState(
    defaultDateRange || searchForTime
  );

  const [isModified, setIsModified] = useState(false);

  const displayInputs = [
    {
      label: "Hits per page",
      name: "hitsPerPage",
      value: itemsPerPage,
      options: [10, 20, 30, 50],
      onChangeAction: target => {
        setItemsPerPage(target.value);
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
      }
    },
    {
      name: "defaultSort",
      label: "Default Sort",
      value: settingsSearchBy,
      options: ["Date", "Popularity"],
      onChangeAction: target => {
        setSettingsSearchBy(target.value);
      }
    },
    {
      name: "defaultDateRange",
      label: "Default date range",
      value: settingsSearchForTime,
      options: ["All time", "Last 24h", "Past Week", "Past Month", "Past Year"],
      onChangeAction: target => {
        setSettingsSearchForTime(target.value);
      }
    }
  ];

  function setLocalStorage(e) {
    e.preventDefault();
    const newLocalStorage = {
      hitsPerPage: itemsPerPage,
      defaultType: settingsSearchType,
      defaultSort: settingsSearchBy,
      defaultDateRange: settingsSearchForTime
    };
    localStorage.setItem("HACKER MEOWS", JSON.stringify(newLocalStorage));
    history.push("/");
  }

  return (
    <div className="settings">
      <p>Settings</p>
      <form onSubmit={setLocalStorage}>
        <div className="display-box">
          <DisplayOptions
            displayInputs={displayInputs}
            setIsModified={setIsModified}
          />
          <div className="ranking-box">
            <RankingOptions
              rankingInputs={rankingInputs}
              setIsModified={setIsModified}
            />
          </div>
          <div className="settings-button">
            <button className="clickable" disabled={!isModified}>
              Apply
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
