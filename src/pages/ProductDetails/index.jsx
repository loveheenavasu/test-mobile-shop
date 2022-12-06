import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import LoadSpinner from '../../components/Spinner';
import Footer from '../../components/Layout/Footer/index';
import BottomFooter from '../../components/Layout/Footer/BottomFooter'
import Shipping from './shipping'
import { getProduct, getRelated } from "../../functions/products";
import './sticky.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = ({ match }) => {
    let productId = match.params.id;
    const [product, setProduct] = useState({});
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadSingleProduct = () => {
        setLoading(true)
        getProduct(productId).then((res) => {
            if (res.data !== null) {
                setProduct(res.data)
                getRelated(res.data._id).then((res) => setRelated(res.data));
                setLoading(false);
            }
            else {
                setProduct({})
                setLoading(false);
            }
        })
    }

    useEffect(() => {
        loadSingleProduct();
    }, [productId]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    const metaTitle = (productId) => {
        switch (productId) {
            case "605dece498a520ed379cf116":
                return 'Redmi Phones Uganda | Buy Redmi Mobile Phones Online | MobileShop Ug';
            case "6065875398a520ed379cf15f":
                return 'Buy OnePlus 8 Pro Online at Best Prices | MobileShop Ug';
            case "605cc0e698a520ed379cf0fe":
                return 'OnePlus 7 Online | Best OnePlus 7 Mobile at Best Prices | MobileShop Ug';
            case "604c8cb6beda5705d5928113":
                return 'Buy Apple MacBook | Shop Best MacBook Online | MobileShop Ug';
            case "60c9eddd095f7d9e10657ea6":
                return 'Buy Hisense Mobile at Low Price in Uganda | Hisense E50 4GB Ram+64GB Storage 5100mah';
            case "604f90962ca4861906227ce8":
                return 'Hisense 170 Litres Fridge | Latest Deals on Hisense Fridges | MobileShop Ug';
            default:
                return 'Product Details'
        }
    }

    const metaDescription = (productId) => {
        switch (productId) {
            case "605dece498a520ed379cf116":
                return 'Choose latest range of Redmi Mobile Phones available online in different models and color. Order Now! Fastest Shipping!';
            case "6065875398a520ed379cf15f":
                return 'Looking to buy OnePlus 8 Pro Online? Get amazing deals on OnePlus 8 Pro Mobiles at MobileShop Ug. Fastest Shipping Available.';
            case "605cc0e698a520ed379cf0fe":
                return 'At MobileShop Ug, we brings you OnePlus 7 Mobile online. OnePlus 7T is an amazing premium smartphone that is provided with improved engineering to offer better user experience.';
            case "604c8cb6beda5705d5928113":
                return 'Looking to Buy Apple MacBook online. Apple updated the 13-inch MacBook Pro with the new Magic Keyboard for the best typing experience ever on a Mac notebook and doubled the storage across all standard configurations.';
            case "60c9eddd095f7d9e10657ea6":
                return 'Explore latest range of Hisense Mobile at low price in Uganda. Hisense E50 smartphone comes with 6.5” large display. Using Hisense patented ULED Technology.';
            case "604f90962ca4861906227ce8":
                return 'Grab a latest deals on Hisense 170 Litres Fridge at MobileShop Ug. Not too large or too small, big capacity for areas with a small foot print.';
            default:
                return 'MobileShop Product Details'
        }
    }

    const metaKeyword = (productId) => {
        switch (productId) {
            case "605dece498a520ed379cf116":
                return 'Redmi phones uganda';
            case "6065875398a520ed379cf15f":
                return 'Buy OnePlus 8 pro online';
            case "605cc0e698a520ed379cf0fe":
                return 'OnePlus 7 online';
            case "604c8cb6beda5705d5928113":
                return 'Buy apple MacBook';
            case "60c9eddd095f7d9e10657ea6":
                return 'Hisense mobile price in uganda';
            case "604f90962ca4861906227ce8":
                return 'Hisense 170 litre fridge';
            default:
                return ''
        }
    }

    return (
        <>
            <Helmet>
                <title>{metaTitle(productId)}</title>
                <meta name="description" content={metaDescription(productId)} />
                <meta name="keywords" content={metaKeyword(productId)} />
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
            <section class="mb-4 mt-1 pt-2">
                <div class="container">
                    {loading && <LoadSpinner />}
                    <div class="col" id="pd-top-links">
                        <ul class="breadcrumb bg-transparent p-0 justify-content-lg-start">
                            <li class="breadcrumb-item" style={{ color: "#f90" }}>
                                <Link class="text-reset" to="/">Home<span className="text-dark"> &gt;&gt;</span></Link>
                            </li>
                            <li class="fw-600" style={{ color: "#f90" }}>
                                <Link class="text-reset" to="#">{product?.category ? product.category.name : 'test'}<span className="text-dark"> &gt;&gt;</span></Link>
                            </li>
                            <li class="fw-600 " style={{ color: "#f90" }}>
                                <Link class="text-reset" to={product?.subs ? `/products/${product?.subs?.name}` : '#'}>{product?.subs ? product?.subs?.name : ''}<span className="text-dark"> &gt;&gt;</span></Link>
                            </li>
                            <li class="fw-600 elipsis " >
                                <Link class="text-reset" to="#">{product?.title ? product?.title : ''}</Link>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white shadow-sm rounded p-3">
                        {
                            Object.keys(product).length === 0 && product.constructor === Object ? (
                                <p>Fetching data ...</p>
                            ) : (
                                <div class="row">
                                    <div class="col-xl-5 col-lg-6 mb-3">
                                        <ProductImage product={product} />
                                    </div>

                                    <div class="col-xl-7 col-lg-6">
                                        <ProductInfo product={product} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

            </section>
            <Shipping product={product} />

            {/* {
                Object.keys(product).length === 0 && product.constructor === Object ? " " : <ProductSpecs product={product} related={related} />
            } */}

            <div class="d-none d-lg-block">
                <Footer />
                <BottomFooter />
            </div>

            <div className=" d-md-none extra">
                <p style={{ visibility: "hidden" }}>MobileShop.ug</p>
            </div>

        </>
    )
}

export default ProductDetails;
