/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import CurrencyFormat from 'react-currency-format';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { removeFromCart } from '../../../store/actions/cartActions'

const Dropdown = ({ cart, total, checkout }) => {

    const dispatch = useDispatch();

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
        toast.success("Product successfuly removed from cart");

    }

    return (
        <>

        <ul class="list-group list-group-flush">

            {
                cart.map((item, i) =>
                    <li class="list-group-item px-0 px-lg-3">
                        <div class="row gutters-5">
                            <div class="col-lg-5 d-flex">
                                <span class="mr-2 ml-0">
                                    {
                                        <LazyLoadImage src={item.images} alt="cart images" width="25" />
                                    }
                                </span>
                                <span class="fs-11 opacity-60">
                                    {item.title}
                                </span>
                            </div>

                            {/* <div class="col-lg col-4 order-1 order-lg-0 my-3 my-lg-0">
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
                            </div> */}
                            <div class="col-lg col-4 order-2 order-lg-0 my-3 my-lg-0">
                                <span class="opacity-60 fs-12 d-block d-lg-none">Quantity</span>
                                <span class="fw-500 fs-11">{item.quantity}</span>
                            </div>

                            {/* <div class="col-lg col-6 order-4 order-lg-0">

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
                            </div> */}

                            <div class="col-lg col-4 order-3 order-lg-0 my-3 my-lg-0 pr-2">
                                <span class="opacity-60 fs-12 d-block d-lg-none">Total</span>
                                <span class="fw-500 fs-13 text-primary">{item.discount ? <CurrencyFormat
                                    value={item.discountprice * item.quantity}
                                    displayType="text"
                                    thousandSeparator
                                /> : <CurrencyFormat
                                        value={item.price * item.quantity}
                                        displayType="text"
                                        thousandSeparator
                                    />}</span>
                            </div>
                            <div class="mr-0 float-right">
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
        <Link to ='/cart'>
        <button type="button" class="btn btn-soft-primary mr-2 add-to-cart fw-600" style={{whiteSpace:"nowrap"}}>
        <span class="d-md-inline-block"> Go to cart</span><i class="bi bi-arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></i>
      </button>
      </Link>
      </>

    )
}

export default Dropdown
