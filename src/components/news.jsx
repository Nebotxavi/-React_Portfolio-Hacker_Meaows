import React, { useState, useEffect } from "react";

import { getTopStories, getTopStoriesID } from "../services/newsService";

const News = () => {
  const [newsID, setNewsID] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    let shouldIgnore = false;
    async function fetchData() {
      try {
        const newsID = await getTopStoriesID();
        if (!shouldIgnore) setNewsID([...newsID]);
      } catch (ex) {
        console.log("News error: ", ex);
      }
    }
    fetchData();
    return () => (shouldIgnore = true);
  }, []);

  useEffect(() => {
    let shouldIgnore = false;
    async function fetchData() {
      try {
        const news = await getTopStories();
        if (!shouldIgnore) setNews([...news]);
      } catch (ex) {
        console.log("News error: ", ex);
      }
    }
    fetchData();
    return () => (shouldIgnore = true);
  }, [newsID]);

  return <h1>news</h1>;
};

export default News;
