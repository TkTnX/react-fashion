import React from "react";
import s from "./s.module.scss";
import { CartInfo } from "../CartInfo/CartInfo";
import { CartItems } from "../CartItems/CartItems";

export const Cart: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <CartInfo />
      <CartItems />
    </div>
  );
};
