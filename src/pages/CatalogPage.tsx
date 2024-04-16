import React, { useState } from "react";
import { Catalog } from "../components/Catalog/Catalog";
import { Pagination } from "../components/Pagination/Pagination";

export const CatalogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)
  return (
    <>
      <Catalog setTotalPages={setTotalPages} currentPage={currentPage} />
      <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </>
  );
};
