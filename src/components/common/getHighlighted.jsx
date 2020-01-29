import React from "react";

const getHighlightedText = (item, query) => {
  if (!query) return item;

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = item.split(new RegExp(`(\\b${escapedQuery})`, "gi")); // (?<!\\w)
  return (
    <React.Fragment>
      {parts.map((part, ind) => (
        <span
          key={ind}
          style={
            part.toLowerCase() === query.toLowerCase()
              ? { fontWeight: "bold", backgroundColor: "#eeff00" }
              : {}
          }
        >
          {part}
        </span>
      ))}
    </React.Fragment>
  );
};

export default getHighlightedText;
