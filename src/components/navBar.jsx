import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <NavLink className="navlink homeLink" to="news">
        Hacker News
      </NavLink>
      <NavLink className="navlink" to="2">
        new
      </NavLink>
      <NavLink className="navlink" to="3">
        threads
      </NavLink>
      <NavLink className="navlink" to="4">
        past
      </NavLink>
      <NavLink className="navlink" to="5">
        comments
      </NavLink>
      <NavLink className="navlink" to="6">
        ask
      </NavLink>
      <NavLink className="navlink" to="7">
        show
      </NavLink>
      <NavLink className="navlink" to="8">
        jobs
      </NavLink>
      <NavLink className="navlink" to="9">
        submit
      </NavLink>
    </div>
  );
};

export default NavBar;
