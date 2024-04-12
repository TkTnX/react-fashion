import React from "react";
import { FullProduct } from "../components/FullProduct/FullProduct";
import { Popular } from "../components/Popular/Popular";
export const FullProductPage: React.FC = () => {
  return (
    <>
      <FullProduct />
      <Popular />
    </>
  );
};
