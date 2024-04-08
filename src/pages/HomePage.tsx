import React from "react";
import { Categories } from "../components/Categories/Categories";
import { Discount } from "../components/Discount/Discount";
import { Festival } from "../components/Festival/Festival";
import { News } from "../components/News/News";
import { Popular } from "../components/Popular/Popular";
import { Top } from "../components/Top/Top";

export const HomePage: React.FC = () => {
  return (
    <>
      <Top />
      <Festival />
      <Categories />
      <Popular />
      <Discount />
      <News />
    </>
  );
};
