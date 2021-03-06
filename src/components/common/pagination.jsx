import React, { useContext } from "react";
import _ from "lodash";

import { UserContext } from "../../App";

const Pagination = ({ pagesAmount }) => {
  const { currentPage, setCurrentPage } = useContext(UserContext);

  if (pagesAmount <= 1) return null;
  const currentPageRef = currentPage + 1;
  const pages = _.range(currentPageRef - 5, currentPageRef + 5 + 1);

  const handleClick = page => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <nav aria-label="pagination">
      <ul className="paginationList">
        {pages[5] !== 1 && (
          <li className="page-item" key="initial">
            <button className="page-link" onClick={() => handleClick(0)}>
              &lt;
            </button>
          </li>
        )}
        {pages.map(page => {
          const style =
            page === currentPageRef ? "page-item active" : "page-item";
          return page > 0 && page <= pagesAmount ? (
            <li className={style} key={page}>
              <button
                className="page-link"
                onClick={() => handleClick(page - 1)}
              >
                {page}
              </button>
            </li>
          ) : null;
        })}
        {!pages.includes(pagesAmount) && (
          <li className="page-item" key="final">
            <button
              className="page-link"
              onClick={() => handleClick(pagesAmount - 1)}
            >
              &gt;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
