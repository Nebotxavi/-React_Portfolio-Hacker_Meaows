import React from "react";

const Select = ({ inputs, requireSvg = false }) => {
  const { name, label, value, options, onChangeAction } = inputs;

  return (
    <div className="select-group-form">
      <label className="selectLabel" htmlFor={`input-${name}`}>
        {label || name}
      </label>
      <span className="selectBox">
        <select
          id={`input-${name}`}
          name={name}
          className="select-input"
          onChange={e => onChangeAction(e.currentTarget)}
          value={value}
        >
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        {requireSvg && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="1 4 7 10 13 4"></polyline>
          </svg>
        )}
      </span>
    </div>
  );
};

export default Select;
