import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import './style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const OrderList = ({ cartItems }) => {

    return(
        <>
            <div className="w-full " id='id-product-container'>
                {
                    cartItems.map((item, index) => {
                        return(
                            <div className="row py-2 px-2" key={index}>
                                <div class="notification">
                                    <LazyLoadImage src={`https://mobileshop.ug/api/uploads/${item.img}`} alt="cart images" width="25" height="45" />
                                    <span class="badge">{item.quantity}</span>
                                </div>
                                <div className="text-lg font-bold" id="id-product-title">{item.title}</div>
                                <div id="id-product-price">UGX {item.price}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default OrderList;

