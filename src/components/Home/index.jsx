import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  var settings = {
    dots: true,            // Нүктөлөр (доттор) көрсөтүү
    infinite: true,        // Слайдерди айланып өтүү
    speed: 500,            // Жылдамдык
    slidesToShow: 1,       // Бир убакта бир гана слайд көрсөтүү
    slidesToScroll: 1,     // Бир убакта бир слайд өтүү
    autoplay: true,        // Автоматтык алмашуу
    autoplaySpeed: 1000,   // 3 секунд сайын сүрөт алмашат
    pauseOnHover: true,    // Слайдерге курсорду коюп турса, алмашуусу токтойт
  };

  return (
    <div id="home">
      <div className="home">
        <Slider {...settings}>
      <div className="home--slider">
        <img
          src="https://i.pinimg.com/736x/29/55/f2/2955f2ee9709ae0b98be902c7b125dc5.jpg"
          alt="img 1"
        />
      </div>
      <div className="home--slider">
        <img
          src="https://i.pinimg.com/736x/69/d2/fc/69d2fc1afac06a5c5fa99dc6bbe8db57.jpg"
          alt="img 2"
        />
      </div>
      <div className="home--slider"> 
        <img
          src="https://i.pinimg.com/736x/8f/e3/81/8fe381338c990eaee22240d2f1d75831.jpg"
          alt="img 3"
        />
      </div>
      <div className="home--slider">
        <img
          src="https://i.pinimg.com/736x/42/a9/d3/42a9d364c66c2fd669208d6f59a1f597.jpg"
          alt="img 4"
        />
      </div>
      <div className="home--slider">
        <img
          src="https://i.pinimg.com/736x/53/35/e4/5335e4c0bdbde1aea7154e5c2b279ff2.jpg"
          alt="img 5"
        />
      </div>
      <div className="home--slider">
        <img
          src="https://i.pinimg.com/736x/23/d7/36/23d7368dda9096f3f5564c67cc671a69.jpg"
          alt="img 6"
        />
      </div>
    </Slider>
        </div>
    </div>
  );
}

export default SimpleSlider;
