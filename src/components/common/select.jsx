import React from "react";

const Select = ({ inputs, setIsModified }) => {
  const { name, label, value, options, onChangeAction } = inputs;

  return (
    <React.Fragment>
      <label className="selectLabel" htmlFor={`input-${name}`}>
        {label || name}
      </label>
      <div className="selectBox">
        <select
          id={`input-${name}`}
          name={name}
          className="select-input"
          onChange={e => {
            onChangeAction(e.currentTarget);
            setIsModified(true);
          }}
          value={value}
        >
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
    // </div>
  );
};

export default Select;
