import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({title, children}) => {
  var settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
    return (
        <section class="mb-4">
      <div class="container">
        <div class="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
          <div class="d-flex mb-3 align-items-baseline border-bottom">
            <h3 class="h5 fw-700 mb-0">
              <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block">{title}</span>
            </h3>
            <a href="#" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">View More</a>
          </div>
          <Slider {...settings}>
           {children}
          </Slider>
        </div>
      </div>
    </section>
    )
}

export default Carousel
