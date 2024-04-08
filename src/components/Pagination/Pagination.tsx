import React from "react";
import ReactPaginate from "react-paginate";

type PaginationType = {
  totalPages: number;
  setCurrentPage: (page: number) => void
};

export const Pagination: React.FC<PaginationType> = ({ totalPages }) => {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        pageCount={totalPages}
        pageRangeDisplayed={5}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
