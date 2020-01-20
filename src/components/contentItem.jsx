import React from "react";

import { getTimeAgo } from "../utils/getTimestamp";

const linkEndpoint = "https://news.ycombinator.com/";

const ContentItem = ({ items }) => {
  return (
    <div className="itemsList">
      {items.map(item => {
        const authorLink = linkEndpoint + "user?id=" + item.author;
        const contentLink = linkEndpoint + "item?id=" + item.objectID;
        if (item._tags[0] === "story")
          return (
            <div className="content-item" key={item.objectID}>
              <p>
                <a href={contentLink}>{item.title}</a>
                <small>
                  <a href={item.url}>{item.url && `(${item.url})`}</a>
                </small>
              </p>
              <p>
                <small>
                  <a href={contentLink}>{item.points} points</a> |{" "}
                  <a href={authorLink}>{item.author} </a>|
                  <a href={contentLink}> {getTimeAgo(item.created_at_i)}</a> |
                  <a href={contentLink}>{` ${item.num_comments} comments`}</a>
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
                  {item.author} | {getTimeAgo(item.created_at_i)} | parent |
                  {" " + item.story_title}
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
