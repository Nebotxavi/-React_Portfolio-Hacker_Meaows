import React, { useContext } from "react";
import _ from "lodash";

import { UserContext } from "../../App";

const Pagination = ({ pagesAmount }) => {
  const { currentPage, setCurrentPage } = useContext(UserContext);

  if (pagesAmount <= 1) return null;
  const currentPageRef = currentPage + 1;
  const pages = _.range(currentPageRef - 5, currentPageRef + 5 + 1);

  return (
    <nav aria-label="pagination">
      <ul className="paginationList">
        {pages.map(page => {
          const style =
            page === currentPageRef ? "page-item active" : "page-item";
          return page > 0 && page <= pagesAmount ? (
            <li className={style} key={page}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(page - 1)}
              >
                {page}
              </button>
            </li>
          ) : null;
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
