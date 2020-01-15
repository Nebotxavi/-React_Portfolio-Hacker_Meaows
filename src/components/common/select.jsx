import React from "react";

const Select = ({ inputs, setItem }) => {
  const { name, value, options } = inputs[0];

  return (
    <div className="select-group-form">
      <label className="selectLabel" htmlFor={`input-${name}`}>
        {name}
      </label>
      <span className="selectBox">
        <select
          id={`input-${name}`}
          name={name}
          className="select-input"
          onChange={e => setItem(e.currentTarget.value)}
          value={value}
        >
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
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
      </span>
    </div>
  );
};

export default Select;
