import React from "react";
import ReactPaginate from "react-paginate";
import "./style.scss";
type PaginationType = {
  setCurrentPage: (event: any) => void;
  totalPages: number;
};

export const Pagination: React.FC<PaginationType> = ({
  setCurrentPage,
  totalPages,
}) => {
  return (
    <>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        pageCount={totalPages}
        pageRangeDisplayed={5}
        onPageChange={(event) => setCurrentPage(event.selected + 1)}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
