import React, { useState } from "react";
import s from "./s.module.scss";

import { Navigation } from "../Navigation/Navigation";
import { HeaderBurgerMenu } from "../HeaderBurgerMenu/HeaderBurgerMenu";
import { Link } from "react-router-dom";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { useAuth } from "../../hooks/useAuth";
import { LoginnedAccount } from "../LoginnedAccount/LoginnedAccount";
import { LoginForm } from "../LoginForm/LoginForm";

import locationImg from "./images/location.svg";
import searchImg from "./images/search.svg";
import userImg from "./images/user.svg";
import favImg from "./images/fav.svg";
import cartImg from "./images/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  openRegisterForm,
  registerFormSelector,
  openAccount,
  openAccountSelector,
  loginFormSelector,
} from "../../redux/Slices/formsSlice";
import { AddNewProductForm } from "../AddNewProductForm/AddNewProductForm";

export const Header: React.FC = () => {
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  const [openAdminPanel, setOpenAdminPanel] = useState(false);
  const dispatch = useDispatch();
  const isOpenRegisterForm = useSelector(registerFormSelector);
  const isOpenAccount = useSelector(openAccountSelector);
  const isOpenLoginForm = useSelector(loginFormSelector);

  const { isAuth, email } = useAuth();
  const handleRegisterForm = () => {
    if (!isAuth) {
      dispatch(openRegisterForm(!isOpenRegisterForm));
    } else {
      dispatch(openAccount(!isOpenAccount));
    }
  };
  {
    isOpenRegisterForm || isOpenAccount || isOpenLoginForm
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }

  const handleOpenAdmin = () => setOpenAdminPanel(!openAdminPanel);

  return (
    <>
      <header className={s.header}>
        {openBurger && <HeaderBurgerMenu />}
        <div className="container">
          <div className={s.wrapper}>
            <button
              className={`${s.burgerBtn} ${
                openBurger ? s.burgerBtnActive : ""
              }`}
              onClick={() => setOpenBurger(!openBurger)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className={s.left}>
              <Link to="/">
                <h4 className={s.logo}>Logo</h4>
              </Link>
              {email === "admin@gmail.com" && (
                <button onClick={handleOpenAdmin} className={s.adminBtn}>
                  Открыть Админ-панель
                </button>
              )}
              {openAdminPanel && <AddNewProductForm />}
              <button className={s.location}>
                <img src={locationImg} alt="Location" />
                <p className={s.city}>МОСКВА</p>
              </button>
            </div>
            <div className={s.center}>
              <nav className={s.nav}>
                <ul className={s.nav__list}>
                  <li className={s.nav__item}>
                    <a href="#!" className={s.nav__sale}>
                      SALE
                    </a>
                  </li>
                  <li className={`${s.nav__item} ${s.active}`}>
                    <button className={s.nav__btn}>ЖЕНЩИНАМ</button>
                  </li>
                  <li className={s.nav__item}>
                    <button className={s.nav__btn}>МУЖЧИНАМ</button>
                  </li>
                  <li className={s.nav__item}>
                    <button className={s.nav__btn}>ДЕТЯМ</button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={s.right}>
              <ul className={s.user__list}>
                <li className={s.user__item}>
                  <button>
                    <img src={searchImg} alt="Поиск..." />
                  </button>
                </li>
                <li className={s.user__item}>
                  <button onClick={handleRegisterForm}>
                    <img src={userImg} alt="Профиль" />
                  </button>
                </li>
                <li className={s.user__item}>
                  <button>
                    <img src={favImg} alt="Любимое" />
                  </button>
                </li>
                <Link to="/cart">
                  <li className={s.user__item}>
                    <button>
                      <img src={cartImg} alt="Корзина" />
                    </button>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {isOpenRegisterForm && <RegistrationForm />}

      {isOpenAccount && <LoginnedAccount />}

      {isOpenLoginForm && <LoginForm />}

      <Navigation />
    </>
  );
};
