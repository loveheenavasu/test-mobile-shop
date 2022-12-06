import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadSpinner from '../../components/Spinner';
import Product from '../../components/Product/product-slidder'

const RelatedProducts = ({ related, loading }) => {
  const styles={

  boxShadow: 'none',
  }

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
    <div className="rounded shadow-sm mb-3">
      <div className="border-bottom p-3">
        <h3 className="fs-16 fw-600 mb-0">
          <span className="mr-4"><strong>Related products</strong></span>
        </h3>
        {loading && <LoadSpinner />}
      </div>
      <div class="d-md-none">
      <div className="pt-3">
            <Slider autoplay={true} slidesToShow={2} autoplaySpeed={2000} infinite={true} arrows={false}  style={styles}>
              {
                related.map(item => (
                  <Product product={item} style={styles}/>
                ))}
            </Slider>
      </div>
      </div>
      <div class="d-none d-lg-block">
      <div className="pt-3">
            <Slider {...settings}>
              {
                related.map(item => (
                  <Product product={item}  style={styles}/>
                ))}
            </Slider>
      </div>
      </div>
    </div>
  )
}

export default RelatedProducts

