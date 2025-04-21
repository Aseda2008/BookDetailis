import React from "react";
// import { ssrExportAllKey } from "vite/module-runner";
import category1 from "../../assets/img/category1.svg";
import category2 from "../../assets/img/category2.png";
import category3 from "../../assets/img/category3.svg";
import category4 from "../../assets/img/category4.svg";
import { HiArrowLongRight } from "react-icons/hi2";
function Category() {
  return (
    <div id="category">
      <div className="container">
        <h1>Категории</h1>
        <div className="category">
          <div className="category--card">
            <img src={category1} alt="img" />
            <h2>Детектив</h2>
            <p>
              <HiArrowLongRight />
            </p>
            <div className="category--card__overlay"></div>
          </div>
          <div className="category--card">
            <img src={category2} alt="img" />
            <div className="category--card__overlay"></div>
            <h2>Фантастика</h2>
            <p>
              <HiArrowLongRight />
            </p>
          </div>
          <div className="category--card">
            <img src={category3} alt="img" />
            <div className="category--card__overlay"></div>
            <h2>Приключения</h2>
            <p>
              <HiArrowLongRight />
            </p>
          </div>
          <div className="category--card">
            <img src={category4} alt="img" />
            <div className="category--card__overlay"></div>
            <h2>Научная</h2>
            <p>
              <HiArrowLongRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
