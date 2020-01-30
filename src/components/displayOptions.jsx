import React from "react";
import Select from "./common/select";

const DisplayOptions = ({ displayInputs, setIsModified }) => {
  return (
    <React.Fragment>
      <h2>Display options</h2>
      <div className="display-settings">
        {displayInputs.map((input, ind) => (
          <Select inputs={input} key={ind} setIsModified={setIsModified} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default DisplayOptions;
