import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";
import { GoSearch } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdCreateNewFolder } from "react-icons/md";
import { LiaWindowCloseSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function Header() {
  const { i18n } = useTranslation();
  const [modal, setModal] = useState(false);
  const [eye, setEye] = useState(false);
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const location = useLocation();
  console.log(location, "uytu");

  function OpenAdmin() {
    if (password === "1111") {
      nav("/Admin");
      setModal(false);
    } else {
      alert("error");
    }
  }

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <div className="header--nav">
            <div className="header--nav__search">
              <input type="text" placeholder="Search here" />
              <a href="#">
                <GoSearch />
              </a>
            </div>
            {location.pathname !== "/basket" && (
              <Link to={"/basket"}>
                <div className="header--nav__block">
                  <BsCart3 />
                  <p>Корзина</p>
                </div>
              </Link>
            )}

            {location.pathname !== "/Admin" && (
              <div
                className="header--nav__block"
                onClick={() => setModal(!modal)}
                role="button"
                style={{ cursor: "pointer" }}
              >
                <FaRegUser />
                <p>Админ</p>
              </div>
            )}

            <Link to={"/added"}>
              <div className="header--nav__block">
                <MdCreateNewFolder />
                <p>добавлен</p>
              </div>
            </Link>
            <select
  onChange={(e) => i18n.changeLanguage(e.target.value)}
  style={{
    padding: "5px 10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
    marginLeft: "15px"
  }}
>
  <option value="ky">Кыргызча</option>
  <option value="ru">Русский</option>
  <option value="en">English</option>
</select>
          </div>
        </div>
        {modal && (
          <div
            className="modalbg"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              className="modalbg--modalblock"
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "10px",
                minWidth: "300px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "200px",
                height: "100px",
                position: "relative",
              }}
            >
              <input
                type={eye ? "text" : "password"}
                placeholder="password"
                style={{
                  width: "90%",
                  padding: "10px 5px",
                  outline: "none",
                  borderRadius: "10px",
                  border: "1px solid black",
                  position: "relative",
                }}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {eye ? (
                <a
                  href="#"
                  style={{
                    position: "absolute",
                    top: "44px",
                    right: "51px",
                    color: "black",
                  }}
                  onClick={() => setEye(false)}
                >
                  <IoEyeOutline />
                </a>
              ) : (
                <a
                  href="#"
                  style={{
                    position: "absolute",
                    top: "44px",
                    right: "51px",
                    color: "black",
                  }}
                  onClick={() => setEye(true)}
                >
                  <IoEyeOffOutline />
                </a>
              )}
              <button
                onClick={() => OpenAdmin()}
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  background: "#000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "70%",
                }}
              >
                Sign in
              </button>
              <a
                href="#"
                onClick={() => setModal(false)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  fontSize: "20px",
                  color: "black",
                }}
              >
                <LiaWindowCloseSolid />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
