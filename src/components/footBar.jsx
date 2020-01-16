import React from "react";

const FootBar = () => {
  return (
    <div className="footBar">
      <ul className="footBar-list">
        <li>
          <a href="https://hn.algolia.com/about">About</a>
        </li>
        <li>
          <a href="https://hn.algolia.com/settings">Setting</a>
        </li>
        <li>
          <a href="https://hn.algolia.com/help">Help</a>
        </li>
        <li>
          <a href="https://hn.algolia.com/api">API Documentation</a>
        </li>
        <li>
          <a href="https://news.ycombinator.com/">Hacker News</a>
        </li>
        <li>
          <a href="https://github.com/algolia/hn-search">Fork/Contribute</a>
        </li>
        <li>
          <a href="https://hn.algolia.com/cool_apps">Cool Apps</a>
        </li>
      </ul>
    </div>
  );
};

export default FootBar;
