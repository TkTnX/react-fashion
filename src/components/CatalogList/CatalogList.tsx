import React from "react";
import { CatalogCard } from "../CatalogCard/CatalogCard";
import { CatalogCardType } from "../Popular/Popular";

export const CatalogList: React.FC<CatalogCardType> = (data) => {
  return (
    <div>
      <CatalogCard {...data} />
    </div>
  );
};
