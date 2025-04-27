import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoCart } from "react-icons/io5";
import img1 from "../../assets/img/img1.svg";
import img2 from "../../assets/img/img2.svg";
import img3 from "../../assets/img/img3.svg";
import img4 from "../../assets/img/img4.svg";
import img5 from "../../assets/img/img5.svg";
import { HiArrowLongDown } from "react-icons/hi2";
import { Link } from "react-router-dom";
function BookCard() {
  const [count, setCount] = useState(5);
  let products = [
    { id: 1, img: img1, price: "2100 сом", name: "Джинсы момсы / банан" },
    {
      id: 2,
      img: img2,
      price: "670 сом",
      name: "Футболка оверсайз / универсал",
    },
    { id: 3, img: img3, price: "1350 сом", name: "Детский свитер / зимний" },
    { id: 4, img: img4, price: "2100 сом", name: "Мужской обувь / классика" },
    { id: 5, img: img5, price: "2100 сом", name: "Футболка нарядная / летняя" },
    { id: 6, img: img1, price: "2100 сом", name: "Джинсы момсы / банан" },
    {
      id: 7,
      img: img2,
      price: "670 сом",
      name: "Футболка оверсайз / универсал",
    },
    { id: 8, img: img3, price: "1350 сом", name: "Детский свитер / зимний" },
    { id: 9, img: img4, price: "2100 сом", name: "Мужской обувь / классика" },
    {
      id: 10,
      img: img5,
      price: "2100 сом",
      name: "Футболка нарядная / летняя",
    },
    { id: 11, img: img1, price: "2100 сом", name: "Джинсы момсы / банан" },
    {
      id: 12,
      img: img2,
      price: "670 сом",
      name: "Футболка оверсайз / универсал",
    },
    { id: 13, img: img3, price: "1350 сом", name: "Детский свитер / зимний" },
    { id: 14, img: img4, price: "2100 сом", name: "Мужской обувь / классика" },
    {
      id: 15,
      img: img5,
      price: "2100 сом",
      name: "Футболка нарядная / летняя",
    },
  ];
  const cutObject = products.slice(0, count);
  console.log(products, "jnk");

  return (
    <div id="book">
      <div className="container">
        <div className="book">
          <div className="book--sort">
            <h1>Возможно, Вам понравится</h1>
            <button>
              Сортировка <TiArrowSortedDown />
            </button>
          </div>
          <div className="book--blocks">
            {cutObject.map((el) => (
              <div className="book--blocks__block">
                <Link to={`/bookDetails/${el.id}`}>
                  <img src={el.img} alt="img" />
                </Link>

                <div className="book--blocks__block--salt">
                  <h4>{el.price}</h4>
                  <a>
                    <IoCart />
                  </a>
                </div>
                <p>{el.name}</p>
              </div>
            ))}
          </div>
          {count < products.length && (
            <center>
              <button onClick={() => setCount(count + 5)}>
                Показать ещё <HiArrowLongDown />
              </button>
            </center>
          )}
        </div>
      </div>
    </div>
  );
}
export default BookCard;
