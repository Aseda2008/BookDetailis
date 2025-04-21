import React from "react";
import logo from "../../assets/img/logo.svg"
import { FaFacebook, FaInstagram, FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
function Footer(){
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <img src={logo} alt="img" />
                    <div className="footer--card">
                        <a href="#">Способ оплаты</a>
                        <a href="#">Условия доставки</a>
                        <a href="#">Правила покупки</a>
                    </div>
                    <div className="footer--card">
                        <a href="#">FAQ</a>
                        <a href="#">О нас</a>
                    </div>
                    <div className="footer--card">
                        <a href="#">Связаться с нами:</a>
                        <a href="#">+996 222 533 735</a>
                        <a href="#">+996 222 533 735</a>
                        <a href="#">+996 222 533 735</a>
                        <div className="footer--card__icon">
                        <a href="#"><FaSquareInstagram />

                        </a>
                        <a href="#"><BsTelegram/>
                        </a>
                        <a href="#"><FaSquareWhatsapp />

                        </a>
                        <a href="#"><FaFacebook/>

                        </a>
                        </div>
                    </div>
                    <div className="footer--card">
                        <a href="#">Адрес</a>
                        <p>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Varius in dolor viverra feugiat <br />
                        neque, sed in. Mattis volutpat malesuada <br />
                        velit parturient aliquam, est. Mauris vitae velit <br />
                        laoreet faucibus nec amet velit.</p>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;