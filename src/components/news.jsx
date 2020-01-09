import React, { useState, useEffect } from "react";

import Filters from "./filters";
import { getNews } from "../services/newsService";
import NewsItem from "./newsItem";
import Pagination from "./common/pagination";

const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagesAmount, setPagesAmount] = useState(0);

  const [searchBy, setSearchBy] = useState("Date");
  const [searchType, setSearchType] = useState("Stories");
  const [searchForTime, setSearchForTime] = useState("All time");

  // const [query, setQuery] = useState("");
  // const [newsPerPage, setNewsPerPage] = useState(30);

  console.log("By", searchBy, "Type", searchType, "forTime", searchForTime);

  useEffect(() => {
    let shouldIgnore = false;
    async function fetchData() {
      try {
        const newsData = await getNews(searchBy, currentPage);
        if (!shouldIgnore) {
          setNews([...newsData.hits]);
          setPagesAmount(newsData.nbPages);
        }
      } catch (ex) {
        console.log("News error: ", ex);
      }
    }
    fetchData();
    return () => (shouldIgnore = true);
  }, [currentPage, searchBy]);

  return (
    <React.Fragment>
      <Filters
        searchBy={searchBy}
        setSearchBy={setSearchBy}
        searchType={searchType}
        setSearchType={setSearchType}
        searchForTime={searchForTime}
        setSearchForTime={setSearchForTime}
      />
      <NewsItem news={news} />
      <Pagination
        currentPage={currentPage}
        pagesAmount={pagesAmount}
        setCurrentPage={setCurrentPage}
      />
    </React.Fragment>
  );
};

export default News;
