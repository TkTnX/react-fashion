import React from "react";
import s from "./s.module.scss";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <div className={s.notFound}>
      <h1>404 😯</h1> <p>Страница не найдена!</p>
      <Link className={s.link} to="/">Вернуться на главную</Link>
    </div>
  );
};
