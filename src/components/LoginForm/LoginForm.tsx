import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/Slices/authSlice";
import { AuthForm } from "../AuthForm/AuthForm";
import { openLoginForm, openRegisterForm } from "../../redux/Slices/formsSlice";

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (email: string, password: string, event: any) => {
    event.preventDefault();
    const auth = getAuth();

    dispatch(openRegisterForm(false));
    dispatch(openLoginForm(false));

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
        alert("Успешный вход!");
      })
      .catch((err) => {
        alert(`Неверные данные! ${err}`);
      });
  };

  return (
    <>
      <AuthForm
        title="Вход"
        email={email}
        pass={pass}
        setEmail={setEmail}
        setPass={setPass}
        handleAuth={handleLogin}
        textBtn="Войти"
      />
    </>
  );
};
