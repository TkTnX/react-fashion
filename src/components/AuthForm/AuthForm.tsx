import React, { useEffect, useState } from "react";
import s from "./s.module.scss";

import { MdOutlineClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFormSelector,
  openRegisterForm,
  openLoginForm,
} from "../../redux/Slices/formsSlice";

type AuthFormType = {
  title: string;
  email: string;
  pass: string;
  textBtn: string;
  setEmail: (value: string) => void;
  setPass: (value: string) => void;
  handleAuth: (
    email: string,
    pass: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};
export const AuthForm: React.FC<AuthFormType> = ({
  title,
  email,
  pass,
  textBtn,
  setEmail,
  setPass,
  handleAuth,
}) => {
  const [emailDirty, setEmailDirty] = useState(false);
  const [passDirty, setPassDirty] = useState(false);
  const [emailError, setEmailError] = useState("Почта не может быть пуста!");
  const [passError, setPassError] = useState("Пароль не может быть пустым!");
  const [formValid, setFormValid] = useState(false);
  const dispatch = useDispatch();
  const isOpenLoginForm = useSelector(loginFormSelector);

  const emailHandler = (event: any) => {
    setEmail(event.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailError("Некорректная почта");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (event: any) => {
    setPass(event.target.value);

    if (!(event.target.value.length >= 6)) {
      setPassError("Пароль должен быть длинее 6 символов");

      if (!event.target.value) {
        setPassError("Пароль не может быть пустым");
      }
    } else {
      setPassError("");
    }
  };

  const blurHandler = (event: any) => {
    switch (event.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "pass":
        setPassDirty(true);
        break;
    }
  };

  const openOtherForm = () => {
    openLoginForm !== undefined && dispatch(openLoginForm(!isOpenLoginForm));
  };

  const closeForms = () => {
    dispatch(openRegisterForm(false));
    dispatch(openLoginForm(false));
  };

  useEffect(() => {
    if (emailError || passError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passError]);

  return (
    <>
      <div className="backdrop">
        <form className={`${s.form} form`}>
          <button
            onClick={() => closeForms()}
            type="button"
            className="closeBtn"
          >
            <MdOutlineClear />
          </button>
          <h2 className={`title-2 ${s.title}`}>{title}</h2>
          <label>
            Введите ваш e-mail
            {emailDirty && emailError && (
              <div style={{ color: "red" }}>{emailError}</div>
            )}
            <input
              name="email"
              onBlur={(event) => blurHandler(event)}
              value={email}
              onChange={(e) => emailHandler(e)}
              type="email"
            />
          </label>
          <label>
            Введите ваш пароль
            {passDirty && passError && (
              <div style={{ color: "red" }}>{passError}</div>
            )}
            <input
              name="pass"
              onBlur={(event) => blurHandler(event)}
              value={pass}
              onChange={(e) => passwordHandler(e)}
              autoComplete="off"
              type="password"
              required
            />
          </label>
          <button
            disabled={!formValid}
            onClick={(event) => handleAuth(email, pass, event)}
            className={`${s.btn} form-btn`}
          >
            {textBtn}
          </button>
          <button onClick={openOtherForm} type="button">
            {title === "Регистрация"
              ? "Уже есть аккаунт?"
              : "Ещё нет аккаунта?"}
          </button>
        </form>
      </div>
    </>
  );
};
