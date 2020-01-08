import React, { useState, useEffect } from "react";

import { getNews } from "../services/newsService";

const News = () => {
  const [news, setNews] = useState([]);
  const [searchBy, setSearchBy] = useState("date");
  const [page, setPage] = useState(0);
  const [pageAmount, setPageAmount] = useState(0);

  useEffect(() => {
    let shouldIgnore = false;
    async function fetchData() {
      try {
        const newsData = await getNews(searchBy, page);
        if (!shouldIgnore) {
          setNews([...newsData.hits]);
          setPageAmount(newsData.nbPages - 1);
        }
      } catch (ex) {
        console.log("News error: ", ex);
      }
    }
    fetchData();
    return () => (shouldIgnore = true);
  }, [page, searchBy]);

  console.log(news, pageAmount);

  return <h1>news</h1>;
};

export default News;
