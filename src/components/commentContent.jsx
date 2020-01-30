import React from "react";
import getHighlightedText from "./common/getHighlighted";
import { getTimeAgo } from "../utils/timeFunctions";
import { htmlDecode } from "../utils/decoder";

const CommentContent = ({ item, query, linkEndpoint }) => {
  const itemEndpoint = linkEndpoint + "item?id=";
  const authorLink = linkEndpoint + "user?id=" + item.author;
  const contentLink = itemEndpoint + item.objectID;
  const parentLink = itemEndpoint + item.parent_id;
  const threadLink = itemEndpoint + item.story_id;

  return (
    <div className="content-item" key={item.objectID}>
      <p>
        <small>
          <a href={contentLink}>{item.points && item.points + " points"}</a>{" "}
          {item.points && " | "}
          <a href={authorLink}>
            {getHighlightedText(item.author, query)}
          </a> | <a href={contentLink}>{getTimeAgo(item.created_at_i)}</a> |{" "}
          <a href={parentLink}>parent</a> |{" on "}{" "}
          <a href={threadLink}>{item.story_title}</a>
        </small>
      </p>
      <div className="content-comment">
        {htmlDecode(item.comment_text).map((paragraph, ind) => (
          <p key={"commentP_" + ind}>{getHighlightedText(paragraph, query)}</p>
        ))}
      </div>
    </div>
  );
};

export default CommentContent;
