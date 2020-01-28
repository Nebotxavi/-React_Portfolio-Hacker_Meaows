import React from "react";

import { getTimeAgo } from "../utils/timeFunctions";
import getHighlightedText from "./common/getHighlighted";
import { htmlDecode } from "../utils/decoder";

const linkEndpoint = "https://news.ycombinator.com/";
const itemEndpoint = linkEndpoint + "item?id=";

const ContentItem = ({ items, query }) => {
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
                <a href={contentLink}>
                  {getHighlightedText(item.title, query)}
                </a>
                <small>
                  <a href={item.url}>
                    {item.url && getHighlightedText(item.url, query)}
                  </a>
                </small>
              </p>
              <p>
                <small>
                  <a href={contentLink}>{item.points} points</a> |{" "}
                  <a href={authorLink}>
                    {getHighlightedText(item.author, query)}{" "}
                  </a>
                  |<a href={contentLink}> {getTimeAgo(item.created_at_i)}</a> |
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
                  <a href={authorLink}>
                    {getHighlightedText(item.author, query)}
                  </a>{" "}
                  | <a href={contentLink}>{getTimeAgo(item.created_at_i)}</a> |{" "}
                  <a href={parentLink}>parent</a> |{" on "}{" "}
                  <a href={threadLink}>{item.story_title}</a>
                </small>
              </p>
              <div className="content-comment">
                {htmlDecode(item.comment_text).map((paragraph, ind) => (
                  <p key={"commentP_" + ind}>
                    {getHighlightedText(paragraph, query)}
                  </p>
                ))}
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default ContentItem;
