import React from "react";
import getHighlightedText from "./common/getHighlighted";
import { getTimeAgo } from "../utils/timeFunctions";
import { htmlDecode } from "../utils/decoder";

const StoryContent = ({ item, query, linkEndpoint }) => {
  const authorLink = linkEndpoint + "user?id=" + item.author;
  const contentLink = linkEndpoint + "item?id=" + item.objectID;

  return (
    <div className="content-item" key={item.objectID}>
      <p className="content-story">
        <a href={contentLink}>{getHighlightedText(item.title, query)}</a>
        <small>
          <a href={item.url}>
            {item.url && getHighlightedText(item.url, query)}
          </a>
        </small>
      </p>
      <p className="content-story">
        <small>
          <a href={contentLink}>{item.points} points</a> |{" "}
          <a href={authorLink}>{getHighlightedText(item.author, query)} </a>|
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
};

export default StoryContent;
