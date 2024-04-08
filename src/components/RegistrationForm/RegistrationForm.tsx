import React from "react";
import s from "./s.module.scss";
import { MdOutlineClear } from "react-icons/md";
type RegistrationProps = {
  setOpenRegisterForm: (state: boolean) => void;
};

export const RegistrationForm: React.FC<RegistrationProps> = ({
  setOpenRegisterForm,
}) => {
  return (
    <>
      <div className="backdrop">
        <form className={`${s.form} form`}>
          <button
            onClick={() => setOpenRegisterForm(false)}
            type="button"
            className="closeBtn"
          >
            <MdOutlineClear />
          </button>
          <h2 className={`title-2 ${s.title}`}>Регистрация</h2>
          <label>
            Введите ваш e-mail
            <input type="email" required />
          </label>
          <label>
            Введите ваш номер телефона
            <input type="tel" required />
          </label>
          <label>
            Введите ваш пароль
            <input autoComplete="off" type="password" required />
          </label>
          <button className={`${s.btn} form-btn`}>Зарегистрироваться</button>
        </form>
      </div>
    </>
  );
};
