import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { BookShopContext } from "../context";
import axios from "axios";

function Basket() {
  const { t } = useTranslation();
  const { basket, setBasket } = useContext(BookShopContext);
  const [userName, setuserName] = useState("");
  const [model, setModel] = useState(false);
  const [userPhome, setuserPhome] = useState("");
  const delBasket = (proid) => {
    let del = basket?.filter((el) => {
      return el._id !== proid;
    });
    localStorage.setItem("basket", JSON.stringify(del));
    setBasket(del);
  };
  function increment(count) {
    let count1 = basket?.map((el) => {
      return el._id === count ? { ...el, count: el.count + 1 } : el;
    });
    setBasket(count1);
    localStorage.setItem("basket", JSON.stringify(count1));
  }
  function decrement(count) {
    let count2 = basket?.map((el) => {
      return el._id === count
        ? { ...el, count: el.count > 1 ? el.count - 1 : 1 }
        : el;
    });
    localStorage.setItem("basket", JSON.stringify(count2));
    setBasket(count2);
  }
  function Submit() {
    if (!userName || !userPhome) {
      alert("404");
    } else {
      const my_id = "1424022425";
      const token = `7706954665:AAHIDVm__T-FOFpJZhFyD47vyx3E17zr4-s`;
      const api_key = `https://api.telegram.org/bot${token}/sendMessage`;

      const userData = {
        chat_id: my_id,
        parse_mode: "HTML",
        text: `Заказ:
    Имя: ${userName}
    Номер: ${userPhome}`,
      };
      axios.post(api_key, userData);
      setuserName("");
      setuserPhome("");
    }
  }

  let res = basket?.reduce((acc, el) => {
    return acc + +el.price * el.count;
  }, 0);
  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket--top">
            <a href="#">Главная / </a>
            <a href="#">Корзина / </a>
            <a href="#">Оформление заказа </a>
          </div>
          <div className="basket--block">
            <div className="basket--block__contact">
              <h1>{t("contactInfo")}</h1>
              <div className="basket--block__contact--userName">
                <input
                  type="text"
                  placeholder="Фио*"
                  onChange={(e) => setuserName(e.target.value)}
                  value={userName}
                />
                <input
                  type="text"
                  placeholder="Телефон*"
                  onChange={(e) => setuserPhome(e.target.value)}
                  value={userPhome}
                />
              </div>
              <div className="basket--block__contact--payment">
                <button onClick={() => !userName || !userPhome ? alert("404") : setModel(true)}>{t("payment")}</button>
                <div className="basket--block__contact--payment__pro">
                  <input type="radio" />
                  <p>{t("cash")}</p>
                </div>
                <div className="basket--block__contact--payment__pro">
                  <input type="radio" />
                  <p>{t("card")}</p>
                </div>

                <button>{t("payment")}</button>
              </div>
            </div>
            <div className="basket--block__delivery">
              <h1>{t("delivery")}</h1>
              <p>{t("chooseDelivery")}</p>
              <div className="basket--block__delivery--flex">
                <input type="radio" />
                <p>{t("pickup")}</p>
              </div>
              <div className="basket--block__delivery--flex">
                <input type="radio" />
                <p>{t("pickup")}</p>
              </div>
              <textarea
                placeholder={t("addressPlaceholder")}
                style={{
                  width: "280px",
                  height: "50px",
                  padding: "10px",
                }}
              />
              <div className="basket--block__delivery__totolprice">
                <div className="basket--block__delivery__totolprice--price">
                  <p>{t("total")}</p>
                  <h5>{res}com</h5>
                </div>
                <p>{t("notPaid")}</p>
              </div>
            </div>
            <div className="basket--block__create">
              {basket?.map((el, idx) => (
                <div className="basket--block__create--card" key={idx}>
                  <img src={el?.url} alt="img" />
                  <div class="basket--block__create--card__text">
                    <p>{el?.name}</p>
                    <p>{el?.price}com</p>
                    <div class="basket--block__create--card__text--count">
                      <h3 onClick={() => increment(el._id)}>+</h3>
                      <h2>{el.count}</h2>
                      <h3 onClick={() => decrement(el._id)}>-</h3>
                    </div>
                    <button onClick={() => delBasket(el._id)}>Удалить</button>
                  </div>
                </div>
              ))}
            </div>
            {model ? (
              <div class="basket--block__model">
                <p>{userName}</p>
                <p>{userPhome}</p>
                <button onClick={() => Submit()}>submit</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
