import React, { useState } from "react";
import logo from "../../assets/img/logo.svg"
import { GoSearch } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";



function Header(){
  const [model,setmodel] = useState(false)
    return (
       <div id="header">
      <div className="container">
        <div className="header">
<Link to={"/"}>
<img src={logo} alt="img" /></Link>
    <div className="header--nav">
   <div className="header--nav__search">
   <input type="text" placeholder="Search here" />
      <a><GoSearch />
      </a>
   </div>
      <Link to={"/basket"}>
      <div className="header--nav__block">
        <a>
        <BsCart3 />
        </a>
        <p>Корзина</p>
      </div></Link>
    <Link to={"/admin"}>
    <div className="header--nav__block">
        <a>
        <FaRegUser />
        </a>
        <p>Админ</p>
      </div></Link>
    </div>
        </div>
      </div>
       </div>
    )
}
export default Header;
