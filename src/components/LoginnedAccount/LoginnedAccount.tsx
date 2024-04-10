import React from "react";
import s from "./s.module.scss";

import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/Slices/authSlice";

import { MdOutlineClear } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { openAccount } from "../../redux/Slices/formsSlice";

export const LoginnedAccount: React.FC = () => {
  const { email } = useAuth();
  const dispatch = useDispatch();

  const handleRemoveUser = () => {
    dispatch(removeUser());
    dispatch(openAccount(false));
  };

  

  return (
    <div className="backdrop">
      <form className={`${s.form} form`}>
        <button
          onClick={() => dispatch(openAccount(false))}
          type="button"
          className="closeBtn"
        >
          <MdOutlineClear />
        </button>
        <h2 className={`title-2 ${s.title}`}>Личный кабинет </h2>
        <label>
          Ваш e-mail:
          <br />
          {email}
        </label>

        <button onClick={handleRemoveUser} className={s.btn}>
          <p>Выйти из аккаунта</p>
          <CiLogout />
        </button>
      </form>
    </div>
  );
};
