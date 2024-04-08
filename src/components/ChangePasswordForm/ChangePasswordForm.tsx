import React from "react";
import s from "./s.module.scss";
import { MdOutlineClear } from "react-icons/md";

type ChangePasswordType = {
  setOpenChangePasswordForm: (boolean: boolean) => void;
};

export const ChangePasswordForm: React.FC<ChangePasswordType> = ({
  setOpenChangePasswordForm,
}) => {
  return (
    <>
      <div className="backdrop">
        <form className={`${s.form} form`}>
          <button
            onClick={() => setOpenChangePasswordForm(false)}
            type="button"
            className="closeBtn"
          >
            <MdOutlineClear />
          </button>
          <h2 className={`title-2 ${s.title}`}>Сменить пароль</h2>

          <label>
            Новый пароль
            <input autoComplete="off" type="password" required />
          </label>
          <label>
            Пароль еще раз
            <input autoComplete="off" type="password" required />
          </label>
          <button className={`${s.btn} form-btn`}>Сменить пароль</button>
        </form>
      </div>
    </>
  );
};
