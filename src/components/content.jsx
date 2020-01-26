import React, { useState, useEffect, useContext } from "react";

import Filters from "./filters";
import { getContent } from "../services/contentService";
import ContentItem from "./contentItem";
import Pagination from "./common/pagination";

import { UserContext, SettingsContext } from "../App";

const Content = () => {
  const [items, setItems] = useState([]);
  const [pagesAmount, setPagesAmount] = useState(0);

  const { currentPage, query } = useContext(UserContext);
  const { itemsPerPage, searchBy, searchType, searchForTime } = useContext(
    SettingsContext
  );

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
      <Filters />
      <ContentItem items={items} query={query} />
      <Pagination pagesAmount={pagesAmount} />
    </React.Fragment>
  );
};

export default Content;
