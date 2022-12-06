/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import CurrencyFormat from 'react-currency-format';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { removeFromCart } from '../../store/actions/cartActions';
import { getProductListById } from './../../functions/products';
import LoadSpinner from '../../components/Spinner';


const CartDetails = ({ cart, total, checkout }) => {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
        toast.success("Product successfuly removed from cart");
    }

    // React.useEffect( () => {
    //     setLoading(true);
    //     let idList = cart.filter((item) => item._id);
    //     getProductListById(idList)
    //     .then((res) => {
    //         let dataRes = res.data;

    //         const result = dataRes.reduce((acc, d) => {
    //             const found = acc.find(a => a._id === d._id);
    //             const value = { path: d.images[0].path, filename: d.images[0].filename};
    //             if (!found) {
    //               acc.push({_id:d._id, images: [value]});
    //             }
    //             else {
    //               found.data.push(value);
    //             }
    //             return acc;
    //           }, []);

    //         setProducts(result);
    //         setLoading(false);
    //     }).catch((err) => {
    //         setLoading(false);
    //     });
    // }, [cart]);

    return (
        <section id="cart-summary">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-8 col-xl-10 mx-auto">
                        <div class="shadow-sm bg-white p-3 rounded text-left">
                            <div class="mb-4">
                                <div class="row gutters-5 d-none d-lg-flex border-bottom mb-3 pb-3">
                                    <div class="col-md-5 fw-600">Product</div>
                                    <div class="col fw-600">Price</div>
                                    <div class="col fw-600">Discount</div>
                                    <div class="col fw-600">Quantity</div>
                                    <div class="col fw-600">Total</div>
                                    <div class="col-auto fw-600">Remove</div>
                                </div>
                                <ul class="list-group list-group-flush">
                                    {
                                        cart.map((item, i) =>
                                            <li class="list-group-item px-0 px-lg-3">
                                                <div class="row gutters-5">
                                                    <div class="col-lg-5 d-flex">
                                                        <span class="mr-2 ml-0">
                                                            <LazyLoadImage src={`https://mobileshop.ug/api/uploads/${item.img}`} alt="cart images" width="25" height="45" />
                                                        </span>
                                                        <span class="fs-14 py-2 opacity-60">
                                                            {item.title}
                                                        </span>
                                                    </div>

                                                    <div class="col-lg col-4 order-1 order-lg-0 my-3 my-lg-0">
                                                        <span class="opacity-60 fs-12 d-block d-lg-none">Price</span>
                                                        <span class="fw-600 fs-16">
                                                            {item.discount ? <CurrencyFormat
                                                                value={item.discountprice}
                                                                displayType="text"
                                                                thousandSeparator
                                                            /> : <CurrencyFormat
                                                                    value={item.price}
                                                                    displayType="text"
                                                                    thousandSeparator
                                                                />}</span>
                                                    </div>
                                                    <div class="col-lg col-4 order-2 order-lg-0 my-3 my-lg-0">
                                                        <span class="opacity-60 fs-12 d-block d-lg-none">Quantity</span>
                                                        <span class="fw-600 fs-16">{item.quantity}</span>
                                                    </div>

                                                    <div class="col-lg col-6 order-4 order-lg-0">

                                                        <div className="">
                                                            <div className="product-quantity d-flex align-items-center">
                                                                <div className="row no-gutters align-items-center aiz-plus-minus mr-3" style={{ width: '90px' }}>
                                                                    <button className="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="minus" data-field="quantity" onClick={() => dispatch({ type: 'DECREMENT', payload: item.id })}>
                                                                        <i className="las la-minus" />
                                                                    </button>
                                                                    <input type="text" name="quantity" className="col border-0 text-center flex-grow-1 fs-16 input-number" placeholder="1" value={item.quantity} min="1" max="0" />
                                                                    <button className="btn  col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="plus" data-field="quantity" onClick={() => dispatch({ type: 'INCREMENT', payload: item.id })}>
                                                                        <i className="las la-plus" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg col-4 order-3 order-lg-0 my-3 my-lg-0">
                                                        <span class="opacity-60 fs-12 d-block d-lg-none">Total</span>
                                                        <span class="fw-600 fs-16 text-primary">{item.discount ? <CurrencyFormat
                                                            value={item.discountprice * item.quantity}
                                                            displayType="text"
                                                            thousandSeparator
                                                        /> : <CurrencyFormat
                                                                value={item.price * item.quantity}
                                                                displayType="text"
                                                                thousandSeparator
                                                            />}</span>
                                                    </div>
                                                    <div class="col-lg-auto col-6 order-5 order-lg-0 text-right">
                                                        <a href="#" class="btn btn-icon btn-sm btn-soft-primary btn-circle"
                                                            onClick={() => removeFromCartHandler(item.id)}
                                                        >
                                                            <i class="las la-trash"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>

                                        )
                                    }
                                </ul>
                            </div>

                            <div class="px-3 py-2 mb-4 border-top d-flex justify-content-between">
                                <span class="opacity-60 fs-15">Subtotal</span>
                                <span class="fw-600 fs-17">UGX <CurrencyFormat
                                    value={total}
                                    displayType="text"
                                    thousandSeparator
                                /></span>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-6 text-center text-md-left order-1 order-md-0">
                                    <Link to="/" class="btn btn-link">
                                        <i class="las la-arrow-left"></i>
                                    Return to shop
                                </Link>
                                </div>
                                <div class="col-md-6 text-center text-md-right">
                                    <Link to="/new-checkout" onClick={checkout} className="btn btn-primary fw-600">Continue to Shipping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartDetails
