import React from "react";
import logo from "../../assets/img/logo.svg"
import { IoMdSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";



function Header(){
    return (
       <div id="header">
      <div className="container">
        <div className="header">
<img src={logo} alt="img" />
    <div className="header--nav">
       <div className="header--nav__search">
       <input type="text" placeholder="Search here" />
      <a><IoMdSearch />
      </a>
      <div className="header--nav__search--block">
        <a>
        <BsCart3 />
        </a>
        <p>Корзина</p>
      </div>
      <div className="header--nav__search--block">
        <a>
        <FaRegUser />
        </a>
        <p>Админ</p>
      </div>
       </div>
    </div>
        </div>
      </div>
       </div>
    )
}
export default Header;
