import React, { useState } from "react";
import s from "./s.module.scss";
import { MdOutlineClear } from "react-icons/md";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/Slices/authSlice";
import { LoginForm } from "../LoginForm/LoginForm";

type RegistrationProps = {
  setOpenRegisterForm: (state: boolean) => void;
};

export const RegistrationForm: React.FC<RegistrationProps> = ({
  setOpenRegisterForm,
}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const [openLoginForm, setOpenLoginForm] = useState(false);

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            // @ts-ignore
            token: user.accessToken,
          })
        );
      })
      .catch(console.error);
  };

  const handleOpenLogin = () => setOpenLoginForm(!openLoginForm);

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
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              required
            />
          </label>
          <label>
            Введите ваш номер телефона
            <input type="tel" required />
          </label>
          <label>
            Введите ваш пароль
            <input
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              autoComplete="off"
              type="password"
              required
            />
          </label>
          <button
            onClick={() => handleRegister(email, pass)}
            className={`${s.btn} form-btn`}
          >
            Зарегистрироваться
          </button>
          <button type="button" onClick={handleOpenLogin}>Уже есть аккаунт?</button>
        </form>
        {openLoginForm && <LoginForm setOpenLoginForm={setOpenLoginForm} />}
      </div>
    </>
  );
};
