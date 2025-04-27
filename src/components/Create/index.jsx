import React, { useContext, useEffect, useState } from "react";
import { BookShopContext } from "../context";
import { IoCart } from "react-icons/io5";
import { HiArrowLongDown } from "react-icons/hi2";
import { Link } from "react-router-dom";
import empty from "../../assets/img/img.jpg";
const CreatAdmin = () => {
  const { product } = useContext(BookShopContext);
  const { setBasket } = useContext(BookShopContext);
  const [count, setCount] = useState(5);

  function addToBasket(item) {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    let some = res.some((el) => el._id === item._id);
    if (!some) {
      let result = [...res, item];
      setBasket(result);
      localStorage.setItem("basket", JSON.stringify(result));
    } else {
      alert("error");
    }
  }

  return (
    <div id="book">
      <div className="container">
        <div className="book">
          <div className="book--blocks">
            {product.length ? (
              product.slice(0, count).map((el, index) => (
                <div key={index} className="book--blocks__block">
                  <Link   to={`/bookdetails/${el._id}`}>
                  
                    <img src={el.url} alt="img" />
                  </Link>
                  <div className="book--blocks__block--salt">
                    <h4>{el.price} сом</h4>
                    <a onClick={() => addToBasket(el)}>
                      <IoCart />
                    </a>
                  </div>
                  <p>{el.name}</p>
                </div>
              ))
            ) : (
              <img
                src={empty}
                alt="img"
                style={{
                  margin: "7px 410px",
                  width: "362px",
                }}
              />
            )}
            <center>
              {count < product.length ? (
                <button onClick={() => setCount(count + 5)}>
                  Показать ещё <HiArrowLongDown />
                </button>
              ) : (
                <button onClick={() => setCount(5)}>Скрыть</button>
              )}
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatAdmin;
