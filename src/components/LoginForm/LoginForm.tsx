import React from "react";
import s from "./s.module.scss";
import { MdOutlineClear } from "react-icons/md";

type LoginType = {
  setOpenLoginForm: (boolean: boolean) => void;
};

export const LoginForm: React.FC<LoginType> = ({ setOpenLoginForm }) => {
  return (
    <>
      <div className="backdrop">
        <form className={`${s.form} form`}>
          <button
            onClick={() => setOpenLoginForm(false)}
            type="button"
            className="closeBtn"
          >
            <MdOutlineClear />
          </button>
          <h2 className={`title-2 ${s.title}`}>Вход</h2>
          <label>
            Введите ваш e-mail
            <input type="email" required />
          </label>
          <p className={s.textOr}>или</p>
          <label>
            Введите ваш номер телефона
            <input type="tel" required />
          </label>
          <label>
            Введите ваш пароль
            <input autoComplete="off" type="password" required />
          </label>
          <button className={`${s.btn} form-btn`}>Войти</button>
        </form>
      </div>
    </>
  );
};
