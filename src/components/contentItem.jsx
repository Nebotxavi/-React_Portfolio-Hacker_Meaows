import React from "react";

import { getTimeAgo } from "../utils/getTimestamp";

const linkEndpoint = "https://news.ycombinator.com/";
const itemEndpoint = linkEndpoint + "item?id=";

const ContentItem = ({ items }) => {
  console.log(items);
  return (
    <div className="itemsList">
      {items.map(item => {
        const authorLink = linkEndpoint + "user?id=" + item.author;
        const contentLink = itemEndpoint + item.objectID;
        const parentLink = itemEndpoint + item.parent_id;
        const threadLink = itemEndpoint + item.story_id;

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
                  <a href={contentLink}>
                    {item.points && item.points + " points"}
                  </a>{" "}
                  {item.points && " | "}
                  <a href={authorLink}>{item.author}</a> |{" "}
                  <a href={contentLink}>{getTimeAgo(item.created_at_i)}</a> |{" "}
                  <a href={parentLink}>parent</a> |{" on "}{" "}
                  <a href={threadLink}>{item.story_title}</a>
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
