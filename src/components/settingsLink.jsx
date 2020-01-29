import React from "react";

import Svg from "./common/svgItems";

const SettingsLink = () => (
  <div className="navItem settingsLink">
    <Svg request={"settingsIcon"} />
    <h1>Settings</h1>
  </div>
);
export default SettingsLink;
