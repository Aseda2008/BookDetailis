import React, { useContext, useState } from "react";
import { BookShopContext } from "../context";
import { IoCart } from "react-icons/io5";
import { HiArrowLongDown } from "react-icons/hi2";
import empty from "../../assets/img/img.jpg";

const CreatAdmin = () => {
  const { product } = useContext(BookShopContext);
  const [count, setCount] = useState(5);
  return (
    <div id="book">
      <div className="container">
        <div className="book">
          <div className="book--blocks">
            {product.length ? (
              product.slice(0, count).map((el) => (
                <div className="book--blocks__block">
                  <img src={el.url} alt="img" />
                  <div className="book--blocks__block--salt">
                    <h4>{el.price}сом</h4>
                    <a>
                      <IoCart />
                    </a>
                  </div>
                  <p>{el.name}</p>
                </div>
              ))
            ) : (
              <img src={empty} alt="img" />
            )}
          </div>
          <center>
            <button onClick={() => setCount(count + 5)}>
              Показать ещё <HiArrowLongDown />
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default CreatAdmin;
