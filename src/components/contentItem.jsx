import React from "react";

const ContentItem = ({ items }) => {
  return (
    <div className="itemsList">
      {items.map(item => {
        console.log("items", item);
        if (item._tags[0] === "story")
          return (
            <div className="content-item" key={item.objectID}>
              <p>
                {item.title}
                <small>{item.url && `(${item.url})`}</small>
              </p>
              <p>
                <small>
                  {item.points} | {item.author} | x time ago |{" "}
                  {item.num_comments}
                </small>
              </p>
            </div>
          );
        else
          return (
            <div className="content-item" key={item.objectID}>
              <p>
                <small>
                  {item.points && item.points + " | "}
                  {item.author} | x time ago | parent |{" " + item.story_title}
                </small>
              </p>
              <p>{item.comment_text}</p>
            </div>
          );
      })}
    </div>
  );
};

export default ContentItem;
