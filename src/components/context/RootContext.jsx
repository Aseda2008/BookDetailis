import React, { useEffect, useState } from "react";
import { BookShopContext } from ".";
import axios from "axios";
function RootContext({ children }) {
  const [product, setProduct] = useState([]);
  async function getpro() {
    let res = await axios(
      `https://api-crud.elcho.dev/api/v1/45012-27288-7bc68/books`
    );
    let { data } = res.data;
    setProduct(data);
  }
  useEffect(() => {
    getpro();
  }, []);
  return (
    <BookShopContext.Provider
      value={{
        product,
        setProduct,
      }}
    >
      {children}
    </BookShopContext.Provider>
  );
}
export default RootContext;
