import React from "react";

const Select = ({ inputs, setItem }) => {
  const { name, value, options } = inputs[0];

  return (
    <div className="select-group-form">
      <label className="selectLabel" htmlFor={`input-${name}`}>
        {name}
      </label>
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
    </div>
  );
};

export default Select;
