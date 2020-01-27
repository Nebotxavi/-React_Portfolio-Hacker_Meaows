import React, { useState } from "react";
import ManageClickOutside from "./manageClickOutside";
import Svg from "./svgItems";

const Dropdown = ({ inputs }) => {
  const { name, value, options, onChangeAction } = inputs;
  const [showOptions, setShowOptions] = useState(false);

  return (
    <ManageClickOutside onClick={() => setShowOptions(false)}>
      <div className="dropdown-wrapper">
        <div className="dropdown-label">{name}</div>
        <div
          className="dropdown-header"
          onClick={() => setShowOptions(!showOptions)}
        >
          <div className="dropdown-title">{value}</div>
          {showOptions ? (
            <Svg request={"openList"} />
          ) : (
            <Svg request={"closedList"} />
          )}
        </div>
        {showOptions && (
          <ul className="dropdown-list">
            {options.map((option, ind) => {
              return (
                <li
                  className="dropdown-item"
                  key={ind}
                  onClick={e => {
                    onChangeAction(e.currentTarget);
                    setShowOptions(false);
                  }}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </ManageClickOutside>
  );
};

export default Dropdown;
