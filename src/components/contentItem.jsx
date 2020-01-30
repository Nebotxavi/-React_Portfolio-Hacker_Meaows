import React from "react";

import StoryContent from "./storyContent";
import CommentContent from "./commentContent";

const linkEndpoint = "https://news.ycombinator.com/";

const ContentItem = ({ items, query }) => {
  return (
    <div className="itemsList">
      {items.map(item => {
        if (item._tags[0] === "story")
          return (
            <StoryContent
              item={item}
              key={item.objectID}
              query={query}
              linkEndpoint={linkEndpoint}
            />
          );
        else
          return (
            <CommentContent
              item={item}
              key={item.objectID}
              query={query}
              linkEndpoint={linkEndpoint}
            />
          );
      })}
    </div>
  );
};

export default ContentItem;
