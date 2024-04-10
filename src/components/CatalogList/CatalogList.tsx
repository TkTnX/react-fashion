import React from "react";
import { CatalogCard } from "../CatalogCard/CatalogCard";
import CatalogSkeleton from "../CatalogSkeleton/CatalogSkeleton";
import { useFetchData } from "../../hooks/useFetchData";
import s from "./s.module.scss";
import { CatalogCardType } from "../Popular/Popular";
export const CatalogList: React.FC = () => {
  const url = "https://35264782283560cf.mokky.dev/catalogItems";
  const { data, isLoading, error } = useFetchData(url);
  if (isLoading) {
    <CatalogSkeleton />;
  }
  if (error) {
    <h1>ОШИБКА!</h1>;
  }



  return (
    <div className={s.catalogList}>
      {isLoading &&
        [...new Array(10)].map((_, index) => <CatalogSkeleton key={index} />)}
      {data.map((item: CatalogCardType) => (
        <CatalogCard key={item.id} {...item} />
      ))}
    </div>
  );
};
