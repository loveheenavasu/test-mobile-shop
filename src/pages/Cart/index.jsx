import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import CartDetails from './CartDetails'
import LoginModal from "../../components/Modal/cart-modal";
import Footer from '../../components/Layout/Footer/index';
import BottomFooter from '../../components/Layout/Footer/BottomFooter'

const Cart = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const history = useHistory();
    const { cartItems } = useSelector(state => state.cart);
    
    const token = localStorage.getItem('token');

    const getTotal = () => {
        return cartItems.reduce((currentValue, nextValue) => {
            return nextValue.discount ? currentValue + nextValue.quantity * nextValue.discountprice : currentValue + nextValue.quantity * nextValue.price
        }, 0);
    };

    const goToCheckout = (e) => {
        e.preventDefault();
        if (token) {
            history.push("/new-checkout");
        } else {
            openModal()
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Helmet>
                <title>Cart Details</title>
                <meta name="description" content="MobileShop Cart" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-193008384-1">
                </script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-193008384-1');
                    `}
                </script>
            </Helmet>

            <section class="mb-4 my-4 pt-4">
                <CartDetails cart={cartItems} total={getTotal()} checkout={goToCheckout} />
                <LoginModal modalIsOpen={modalIsOpen} close={closeModal} />
                <div className='d-lg-none pb-3'>
                    <Footer />
                    <BottomFooter />
                </div>
                <div className='d-none d-lg-block' style={{marginBottom:"-2%"}} >
                    <Footer />
                    <BottomFooter />
                </div>
            </section>
        </>
    )
}

export default Cart
