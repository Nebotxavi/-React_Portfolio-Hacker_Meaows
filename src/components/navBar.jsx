import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "./logo";
import SearchBar from "./common/searchBar";
import SettingsLink from "./settingsLink";

const NavBar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <SearchBar />
      <NavLink to="settings">
        <SettingsLink />
      </NavLink>
    </div>
  );
};

export default NavBar;
