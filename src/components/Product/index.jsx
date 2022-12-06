import React, { useState } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Truncate from "react-truncate";
import CurrencyFormat from "react-currency-format";
import { LazyLoadImage } from "react-lazy-load-image-component";
import StorageModal from "../../components/Modal/storage-modal";
import { generatePublicUrl } from '../../helpers/publicUrl';
import { addToCart } from "../../store/actions/cartActions";

import "./styles.css";

const Product = ({ product }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
	const history = useHistory();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const Msg = () => (
    <div>
      Product Added To Cart Successfully
      <Link to="/cart" className="pl-2">
        <button class="btn btn-sm btn-primary">Go To Cart</button>
      </Link>
    </div>
  );
  const shippingprice = product.price;
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
    };

    dispatch(addToCart(cat));
    toast.info(Msg);
  };

  const checkStorage = () => {
    if (product.storageChecked) {
      openModal();
    } else {
      handleAddToCart();
    }
  };

  const handlePreOrder = () => {
		history.push("/preorder");
	}

  return (
    <div className="col mb-1">
      <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md h-100 has-transition bg-white">
        <StorageModal
          modalIsOpen={modalIsOpen}
          close={closeModal}
          product={product}
        />
        <div className="position-relative">
          <Link
            to={`${process.env.PUBLIC_URL}/product/${product._id}`}
            className="d-block text-center pt-3 product-img-box"
          >
            <LazyLoadImage
              alt="product"
              src={
                product.images && product.images.length
                  ? generatePublicUrl(product.images[0].filename)
                  : ""
              }
              threshold={100}
              className="product-img ls-is-cached lazyloaded"
            />
          </Link>
          <div className="absolute-top-left pt-2 pl-2">
            {product.condition === "Uk Used" ? (
              <span className="badge badge-inline badge-danger">UK Used</span>
            ) : (
              ""
            )}
            {product.condition === "Brand New" ? (
              <>
                <span
                  className="badge badge-inline badge-success"
                  style={{ backgroundColor: "#c29b0c" }}
                >
                  Brand New
                </span>
                <br></br>
                <img
                  src="/images/warranty3.webp"
                  alt="wnty"
                  width="50"
                  height="60"
                />{" "}
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="p-md-3 p-2  text-left">
          <div className="fs-15">
            <div className="fw-600 ms-brand">
              {product.subs ? (
                <span className="badge badge-inline badge-soft-secondary">
                  {product.subs.name}
                </span>
              ) : (
                ""
              )}{" "}
              &nbsp;
              { Math.sign(product.itemStock) === -1 ? (
									<span className="badge badge-inline text-uppercase" style={{ color:  'green' }}>
										<b>Coming Soon</b>
									</span>
								) : Math.sign(product.itemStock) === 0 ? (
									<span className="badge badge-inline text-uppercase" style={{ color:  'red' }}>
										<b>Out of Stock</b>
									</span>
								) : '' }
              &nbsp;<br></br>
              {/* <span class="badge badge-inline badge-success float-right" style={{backgroundColor:'red'}}>Out of Stock</span> */}
              {shippingprice >= 300000 ? (
                <small
                  style={{
                    whiteSpace: "nowrap",
                    color: "red",
                    fontWeight: "600",
                  }}
                >
                  Eligible Free Delivery
                </small>
              ) : (
                <small style={{ display: "none" }}> Eligible Free Delivery</small>
              )}
            </div>

            <Link to={`${process.env.PUBLIC_URL}/product/${product._id}`}>
              <h3
                className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-2"
                style={{ color: "black" }}
              >
                <Truncate
                  lines={2}
                  ellipsis={
                    <span>
                      ...{" "}
                      <Link
                        to={`${process.env.PUBLIC_URL}/product/${product._id}`}
                      ></Link>
                    </span>
                  }
                >
                  {product.title}
                </Truncate>
              </h3>
            </Link>

            {product.discountprice ? (
              <>
                <span className="fw-bold text-reset realprice" style={{ fontWeight: "bold" }}>
                  {product.discountprice ? (
                    <CurrencyFormat
                      prefix={"UGX "}
                      value={product.discountprice}
                      displayType="text"
                      thousandSeparator
                    />
                  ) : (
                    ""
                  )}
                </span>
                <div className="s-prc-w">
                  <del className="d-block fw-500 opacity-70">
                    {product.price ? (
                      <CurrencyFormat
                        prefix={"UGX "}
                        value={product.price}
                        displayType="text"
                        thousandSeparator
                      />
                    ) : (
                      ""
                    )}
                  </del>
                  <div class="tag _dsct _sm">-{product.discount}%</div>
                </div>
              </>
            ) : (
              <>
                <span className="fw-700 text-reset">
                  <a style={{ display: "none" }}>none</a>
                </span>
                <br></br>
                {product.price ? (
                  <span className="fw-bold text-reset realprice" style={{ fontWeight: "bold" }}>
                    {/* price without discount */}
                    <CurrencyFormat
                      prefix={"UGX "}
                      value={product.price}
                      displayType="text"
                      thousandSeparator
                    />
                  </span>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
          <div className="rating rating-sm mt-1">
            <i className="las la-star active" />
            <i className="las la-star active" />
            <i className="las la-star active" />
            <i className="las la-star active" />
            <i className="las la-star active" />
          </div>
          {
            product.condition === "Brand New" ?
            <small className='text-muted'>24 months gurantee on brand new products</small>
          :
            <>
              {
                product.condition === "Uk Used" ?
                <small className='text-muted'>Warranty protection policy applies for all Uk- used products</small>
                :
                <small className='text-muted'></small>
              }
            </>
          }
          
          

          <div
            className="mt-1"
            style={{
              display: "flex",
              position: "relative",
              alignItems: "center",
              transition: "all .35s ease",
            }}
          >
            {product.itemStock > 0 ? (
							<button
								type="button"
								className="btn btn-product-cart w-75"
								onClick={checkStorage}
							>
								<span className="btn-cart text-uppercase">Add to Cart</span>
							</button>
						) : (
							<button
								type="button"
								className="btn btn-product-cart w-75"
								onClick={handlePreOrder}
                style={{ backgroundColor: 'red' }}
							>
								<span className="btn-cart text-uppercase">Pre Order</span>
							</button>
						)}

            <button
              type="button"
              className="btn btn-primary cartie shadow-lg ml-2 p-1 pb-2 bg-white rounded w-25 d-sm-none"
              style={{ backgroundColor: "white" }}
            >
              <a href="tel:0709744874">
                {/* <i class="las la-phone la-2x btn-call" style={{color:"#f90"}}></i> */}
                <i class="bi bi-telephone-fill" style={{ color: "#f90" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
