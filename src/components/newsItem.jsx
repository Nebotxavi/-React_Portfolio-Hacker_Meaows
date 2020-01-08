import React from "react";

const NewsItem = ({ news }) => {
  return (
    <ul>
      {news.map(item => (
        <li key={item.objectID}>{item.title}</li>
      ))}
    </ul>
  );
};

export default NewsItem;
