import React, { useState } from "react";
import s from "./s.module.scss";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { MdOutlineClear } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/Slices/authSlice";
type LoginType = {
  setOpenLoginForm: (boolean: boolean) => void;
};

export const LoginForm: React.FC<LoginType> = ({ setOpenLoginForm }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (email: string, password: string, event: any) => {
    event.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            // @ts-ignore
            token: user.accessToken,
          })
        );
      })
      .catch((err) => {
        alert(`Неверные данные! ${err}`);
      });
  };

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
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </label>
          <p className={s.textOr}>или</p>
          <label>
            Введите ваш номер телефона
            <input type="tel" />
          </label>
          <label>
            Введите ваш пароль
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              autoComplete="off"
              type="password"
              required
            />
          </label>
          <button
            onClick={(event) => handleLogin(email, pass, event)}
            className={`${s.btn} form-btn`}
          >
            Войти
          </button>
        </form>
        <a href="#!">Ещё нет аккаунта?</a>
      </div>
    </>
  );
};
