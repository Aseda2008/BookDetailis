import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookShopContext } from "../context";

const BookDetails = () => {
  const { bookId } = useParams();
  const { product } = useContext(BookShopContext);
  const [dtl, setDtl] = useState({});

  function getDetail() {
    let res = product.find((el) => el._id === +bookId);
    setDtl(res);
  }
  useEffect(() => {
    getDetail();
  }, [product]);

  return (
    <div id="detail">
      <div className="container">
        <div className="detail">
          <img src={dtl?.url} alt="img" />
          <div className="detail--card">
            <h1>{dtl?.name}</h1>
            <h2>{dtl?.price}com</h2>
            <div class="detail--card__count">
              <h3>+</h3>
              <h2>1</h2>
              <h3>-</h3>
            </div>
            <p>
              <span>Жанр: </span>
              {dtl?.category}
            </p>
            <p>
              <span>
                Описание: <br />
              </span>
              {dtl?.des}
            </p>
            <div class="detail--card__btn">
              <button>Добавить в корзину</button>
              <button>Купить сейчас</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
