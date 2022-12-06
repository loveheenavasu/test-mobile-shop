import React from 'react'

const CartHeader = () => {
    return (
        <section id="cart-header">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 mx-auto">
                        <div class="row aiz-steps arrow-divider">
                            <div class="col active">
                                <div class="text-center text-primary">
                                    <i class="la-3x mb-2 las la-shopping-cart"></i>
                                    <h3 class="fs-14 fw-600 d-lg-block text-capitalize">My Cart</h3>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-center">
                                    <i class="la-3x mb-2 opacity-50 las la-truck"></i>
                                    <h3 class="fs-14 fw-600 d-lg-block opacity-50 text-capitalize">Checkout</h3>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-center">
                                    <i class="la-3x mb-2 opacity-50 las la-check-circle"></i>
                                    <h3 class="fs-14 fw-600 d-lg-block opacity-50 text-capitalize">Confirmation</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartHeader
