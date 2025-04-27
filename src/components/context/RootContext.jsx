import React, { useEffect, useState } from "react";
import { BookShopContext } from ".";
import axios from "axios";
function RootContext({ children }) {
  const [product, setProduct] = useState([]);
  const [basket, setBasket] = useState([]);
  async function getpro() {
    let res = await axios(
      `https://api-crud.elcho.dev/api/v1/45012-27288-7bc68/books`
    );
    let { data } = res.data;
    setProduct(data);
  }

  function getBasket() {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(res);
  }

  useEffect(() => {
    getpro();
    getBasket();
  }, []); 

  return (
    <BookShopContext.Provider
      value={{
        product,
        setProduct,
        basket,
        setBasket,
      }}
    >
      {children}
    </BookShopContext.Provider>
  );
}
export default RootContext;
