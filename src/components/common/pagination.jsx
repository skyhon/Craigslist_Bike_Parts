import React from "react";
import _ from "lodash";
const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pages = _.range(1, Math.ceil(itemsCount / pageSize) + 1);

  return pages <= 1 ? (
    <></>
  ) : (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
            onClick={() => onPageChange(page)}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
