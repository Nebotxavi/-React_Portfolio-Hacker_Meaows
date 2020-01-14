import React, { useState, useEffect, useContext } from "react";

import Filters from "./filters";
import { getContent } from "../services/contentService";
import ContentItem from "./contentItem";
import Pagination from "./common/pagination";

import { UserContext } from "../App";

const Content = () => {
  const [items, setItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [pagesAmount, setPagesAmount] = useState(0);
  const [searchBy, setSearchBy] = useState("Date");
  const [searchType, setSearchType] = useState("Stories");
  const [searchForTime, setSearchForTime] = useState("All time");

  const { currentPage, setCurrentPage, query } = useContext(UserContext);

  useEffect(() => {
    let shouldIgnore = false;
    async function fetchData() {
      try {
        const contentData = await getContent(
          searchBy,
          searchType,
          searchForTime,
          currentPage,
          itemsPerPage,
          query
        );
        if (!shouldIgnore) {
          setItems([...contentData.hits]);
          setPagesAmount(contentData.nbPages);
        }
      } catch (ex) {
        console.log("Fetching items error: ", ex);
      }
    }
    fetchData();
    return () => (shouldIgnore = true);
  }, [currentPage, searchBy, searchType, itemsPerPage, searchForTime, query]);

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
      <ContentItem items={items} />
      <Pagination
        currentPage={currentPage}
        pagesAmount={pagesAmount}
        setCurrentPage={setCurrentPage}
      />
    </React.Fragment>
  );
};

export default Content;
