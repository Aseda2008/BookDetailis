import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "../Category";
import BookCard from "../BookCard";

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
  const images = [
    "https://img.freepik.com/free-vector/horizontal-sale-banner-template-world-book-day-celebration_23-2150184563.jpg?w=2000",
    "https://img.freepik.com/free-vector/social-media-promo-template-world-book-day-celebration_23-2150184548.jpg?w=1800",
    "https://img.freepik.com/free-vector/brochure-template-world-book-day-celebration_23-2150184557.jpg?w=2000",
    "https://img.freepik.com/free-vector/webinar-template-world-book-day-celebration_23-2150184560.jpg?w=1800",
    "https://img.freepik.com/free-vector/vertical-poster-template-world-book-day-celebration_23-2150184551.jpg?w=1380",
    "https://img.freepik.com/premium-vector/instagram-stories-collection-world-book-day-celebration_23-2150184542.jpg?w=2000"
  ];
  return (
    <>
    <div id="home"  style={{ overflow: "hidden" }}>
    <Slider {...settings}>
        {images.map((el, idx) => (
          <div key={idx} className="home--slider">
            <img
              src={el}
              alt={`img ${idx + 1}`}
              style={{ 
                height: "480px",
                objectFit: "cover", 
                width: "100%" }}
            />
          </div>
        ))}
    </Slider>
    </div>
    <Category/>
    <BookCard/>
    </>
  );
}

export default SimpleSlider;
