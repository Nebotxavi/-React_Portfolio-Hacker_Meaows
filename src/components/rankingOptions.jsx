import React from "react";
import Select from "./common/select";

const RankingOptions = ({ rankingInputs, setIsModified }) => {
  return (
    <React.Fragment>
      <h2>Ranking options</h2>
      <div className="ranking-settings">
        {rankingInputs.map((input, ind) => (
          <Select inputs={input} key={ind} setIsModified={setIsModified} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default RankingOptions;
