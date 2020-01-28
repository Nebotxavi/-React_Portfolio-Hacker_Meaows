import React, { useState } from "react";
import Svg from "./common/svgItems";
import ManageClickOutside from "./common/manageClickOutside";

const ShareMenu = () => {
  const [showOptions, setShowOptions] = useState(false);

  const appUrl = process.env.REACT_APP_LINK;
  const shareOptions = [
    {
      option: "Twitter",
      text: "Share on Twitter",
      url: `https://twitter.com/intent/tweet?text=Hacker%20Meows&url=${appUrl}`
    },
    {
      option: "Facebook",
      text: "Share on Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${appUrl}%2F&t=Hacker%20Meows`
    }
  ];

  return (
    <React.Fragment>
      <ManageClickOutside onClick={() => setShowOptions(false)}>
        <div
          className="share-icon"
          onClick={() => setShowOptions(!showOptions)}
        >
          <Svg request="shareIcon" />
        </div>
        {showOptions && (
          <ul className="dropdown-list share-list">
            {shareOptions.map((option, ind) => {
              return (
                <li
                  key={ind}
                  className="dropdown-item clickable"
                  onClick={() => {
                    window.open(option.url, "myWindow", "width=600,height=300");
                    setShowOptions(false);
                  }}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        )}
      </ManageClickOutside>
    </React.Fragment>
  );
};

export default ShareMenu;
