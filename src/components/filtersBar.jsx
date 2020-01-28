import React from "react";

import Filters from "./filters";
import ShareMenu from "./shareMenu";

const FiltersBar = () => {
  return (
    <div className="filters-bar">
      <Filters />
      <ShareMenu />
    </div>
  );
};

export default FiltersBar;
