import React, { useContext } from "react";
import { BookSohpContext } from "../context";
function Home(){
    const {product} = useContext(BookSohpContext)
    return(
       <div id="book">
        <div className="container">
        {product.map((el) => (
            <div className="book--block">
              <img src={el.url} alt="#" />
              <div className="book--block__text">
                <h1>{el.name}</h1>
                <p>{el.des}</p>
                <div className="book--block__text--basket">
                  <h3>{el.price}</h3>
                </div>
              </div>
            </div>
          ))}
            </div>
        </div>
    )
}
export default Home;



