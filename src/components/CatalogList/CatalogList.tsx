import React from "react";
import { CatalogCard } from "../CatalogCard/CatalogCard";
import CatalogSkeleton from "../CatalogSkeleton/CatalogSkeleton";
import { useFetchData } from "../../hooks/useFetchData";
import s from "./s.module.scss";
import { CatalogCardType } from "../Popular/Popular";

type CatalogListType = {
  sortQueryValue: string;
  filterQuery: string;
  currentPage: number;
  setTotalPages: (num: number) => void;
};

export const CatalogList: React.FC<CatalogListType> = ({
  sortQueryValue,
  filterQuery,
  currentPage,
  setTotalPages,
}) => {
  const url = `https://35264782283560cf.mokky.dev/catalogItems?limit=10&page=${currentPage}&sortBy=${sortQueryValue}&price[${
    filterQuery === "Более 3000 рублей" ? "from" : "to"
  }]=3000`;

  const { data, isLoading, error } = useFetchData(url, "GET");
  if (isLoading) {
    <CatalogSkeleton />;
  }
  if (error) {
    <h1>ОШИБКА!</h1>;
  }
  setTimeout(() => {
    // @ts-ignore
    setTotalPages(data.meta.total_pages);
  }, 200);

  return (
    <div className={s.catalogList}>
      {isLoading &&
        [...new Array(10)].map((_, index) => <CatalogSkeleton key={index} />)}
      {/* @ts-ignore */}
      {data.items && data.items.map((item: CatalogCardType) => (
          <CatalogCard key={item.id} {...item} />
        ))}
    </div>
  );
};
