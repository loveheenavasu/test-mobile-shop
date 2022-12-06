import React, { useState } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Truncate from 'react-truncate';
import CurrencyFormat from 'react-currency-format';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { generatePublicUrl } from '../../helpers/publicUrl';
import { addToCart } from '../../store/actions/cartActions';
import './styles.css'

const Product = ({ product }) => {

  const dispatch = useDispatch();

  const Msg = () => (
    <div>
      Product Added To Cart Successfully
      <Link to='/cart' className="pl-2">
      <button class="btn btn-sm btn-primary">Go To Cart</button>
      </Link>
    </div>
  )

  const handleAddToCart = () => {
    const cat = {
      id: product._id,
      title: product.title,
      images: product.images[0].url,
      price: product.price,
      discount: product.discount,
      discountprice: product.discountprice,
      quantity: 1,
			img: product.images[0].filename
    }

    dispatch(addToCart(cat))
    toast(Msg)
};

  return (
    <div className="col mb-1">
      <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md h-100 has-transition bg-white">
        <div className="position-relative">
          <Link to={`${process.env.PUBLIC_URL}/accessory/${product._id}`}
            className="d-block text-center pt-3 product-img-box">
            <LazyLoadImage
              alt="product"
              src={product.images && product.images.length ? generatePublicUrl(product.images[0].filename) : ''}
              threshold={100}
              className="product-img"
            />
          </Link>
          <div className="absolute-top-left pt-2 pl-2">
            {product.condition === 'Uk Used' ? <span className="badge badge-inline badge-danger">UK Used</span> : ''}
          </div>
        </div>
        <div className="p-md-3 p-2 text-left">
          <div className="fs-15">
            <div className="fw-600 ms-brand">{product.subs ? <span className="badge badge-inline badge-soft-secondary">{product.subs.name}</span> : ''}
            </div>
            <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-2">
              <Truncate lines={2} ellipsis={<span>... <Link to={`${process.env.PUBLIC_URL}/accessory/${product._id}`}></Link></span>}>
                {product.title}
              </Truncate>
            </h3>

            { Math.sign(product.itemStock) === -1 ? (
              <span className="badge badge-inline text-uppercase" style={{ color:  'green' }}>
                <b>Coming Soon</b>
              </span>
            ) : Math.sign(product.itemStock) === 0 ? (
              <span className="badge badge-inline text-uppercase" style={{ color:  'red' }}>
                <b>Out of Stock</b>
              </span>
            ) : '' }
            <br />

            {
              product.discountprice ?
                <>
                  <span className="fw-700 text-reset">
                    <CurrencyFormat
                      prefix={"UGX "}
                      value={product.discountprice}
                      displayType="text"
                      thousandSeparator
                    />
                  </span>
                  <div className="s-prc-w">
                    <del className="d-block fw-500 opacity-70">
                      <CurrencyFormat
                        // prefix={"UGX "}
                        value={product.price}
                        displayType="text"
                        thousandSeparator
                      />
                    </del>
                    <div class="tag _dsct _sm">-{product.discount}%</div>
                  </div>
                </> :
                <><span className="fw-700 text-reset">
                <a style={{display:"none"}}>none</a>
              </span><br></br>
                <span className="fw-700 text-reset">
                  <CurrencyFormat
                    prefix={"UGX "}
                    value={product.price}
                    displayType="text"
                    thousandSeparator
                  /></span>
                  </>
            }
          </div>
          <div className="rating rating-sm mt-1">
            <i className="las la-star active" />
            <i className="las la-star active" />
            <i className="las la-star active" />
            <i className="las la-star active" />
            <i className="las la-star active" />
          </div>

          <div className="mt-3" style={{
            display: "flex", position: "relative",
            alignItems: "center",
            transition: "all .35s ease",
            paddingBottom: "5px"
          }}>
            {/* <button type="button" className="btn btn-product-cart" onClick={handleAddToCart}>
              <span className="btn-cart">Add Cart $-$-$</span>
            </button> */}

            {product.itemStock > 0 ? (
							<button type="button" className="btn btn-product-cart" onClick={handleAddToCart}>
              <span className="btn-cart">Add Cart</span>
            </button>
						) : (
							<button
								type="button"
								className="btn btn-product-cart w-75"
								// onClick={handlePreOrder}
                style={{ backgroundColor: 'red' }}
							>
								<span className="btn-cart text-uppercase">Pre Order</span>
							</button>
						)}

            <button type="button" className="btn btn-soft-primary btn-product-call d-xl-none d-lg-block">
              <a href="tel:0709744874">
                <i class="las la-phone la-2x btn-call"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
