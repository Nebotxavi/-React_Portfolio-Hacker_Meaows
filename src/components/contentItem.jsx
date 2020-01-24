import React from "react";

import { getTimeAgo } from "../utils/timeFunctions";
import { htmlDecode } from "../utils/decoder";

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
              {item.story_text && (
                <div className="content-story-text">
                  {htmlDecode(item.story_text).map((paragraph, ind) => (
                    <p key={"storyP_" + ind}>
                      <small>{paragraph}</small>
                    </p>
                  ))}
                </div>
              )}
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
              <div>
                {htmlDecode(item.comment_text).map((paragraph, ind) => (
                  <p key={"commentP_" + ind}>{paragraph}</p>
                ))}
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default ContentItem;
