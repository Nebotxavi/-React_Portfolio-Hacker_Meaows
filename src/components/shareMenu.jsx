import React, { useState } from "react";
import Svg from "./common/svgItems";

const ShareMenu = () => {
  const [showOptions, setShowOptions] = useState(false);

  const inputs = [
    {
      name: "Search",
      options: ["All", "Stories", "Comments"]
    }
  ];

  return (
    <Svg onClick={() => setShowOptions(!showOptions)} request="shareIcon" />
  );
};

export default ShareMenu;
