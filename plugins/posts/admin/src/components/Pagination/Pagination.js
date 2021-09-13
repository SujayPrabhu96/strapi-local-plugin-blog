import React, { useState } from "react";
import { GlobalPagination } from "strapi-helper-plugin";

const Pagination = ({ postsCount }) => {
  const [page, setPage] = useState(1);
  const handlePageChange = ({ target: { value } }) => {
    setPage(value);
  };

  return (
    <GlobalPagination
      count={postsCount}
      onChangeParams={handlePageChange}
      params={{
        _page: page,
        _limit: 10,
      }}
    />
  );
};

export default Pagination;
