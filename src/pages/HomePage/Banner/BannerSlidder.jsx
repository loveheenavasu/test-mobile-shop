import React from "react";
import Slider from "react-slick";

const BannerSlidder = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    draggable: false,
    fade: true
  };

  return (
    <section className="top-banner">
      <div className="slick-list draggable">
        <Slider {...settings}>
          <div className="slick-slide">
            <div class="carousel-box" >
              <img class="d-block mw-100 img-fit rounded shadow-sm" src="/images/webBanner1.png" alt="MobileShop Banner"  />
            </div>
          </div>
          <div className="slick-slide">
            <div class="carousel-box" >
              <img class="d-block mw-100 img-fit rounded shadow-sm" src="/images/webBanner2.png" alt="MobileShop Banner" />
            </div>
          </div>
          <div className="slick-slide">
            <div class="carousel-box" >
              <img class="d-block mw-100 img-fit rounded shadow-sm" src="/images/bnew2.webp" alt="MobileShop Banner"  />
            </div>
          </div>
          <div className="slick-slide">
            <div class="carousel-box" >
              <img class="d-block mw-100 img-fit rounded shadow-sm" src="/images/phone.webp" alt="MobileShop Banner" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
};

export default BannerSlidder;
