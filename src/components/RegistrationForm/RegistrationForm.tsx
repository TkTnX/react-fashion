import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/Slices/authSlice";
import { AuthForm } from "../AuthForm/AuthForm";
import { openLoginForm, openRegisterForm } from "../../redux/Slices/formsSlice";

export const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();

  const handleRegister = (email: string, password: string, event: any) => {
    event.preventDefault();

    dispatch(openRegisterForm(false));
    dispatch(openLoginForm(false));
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            // @ts-ignore
            token: user.accessToken,
          })
        );
        alert("Успешная регистрация! Добро пожаловать!");
      })
      .catch((err) => {
        alert(`Ошибка!!! ${err.message}`);
      });
  };

  return (
    <>
      <AuthForm
        title="Регистрация"
        email={email}
        pass={pass}
        setEmail={setEmail}
        setPass={setPass}
        handleAuth={handleRegister}
        textBtn="Зарегистрироваться"
      />
    </>
  );
};
