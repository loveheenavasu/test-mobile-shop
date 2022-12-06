import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import LoadSpinner from '../../components/Spinner';
import Footer from '../../components/Layout/Footer/index';
import BottomFooter from '../../components/Layout/Footer/BottomFooter'

import { getAccessory } from "../../functions/accessory";
import './sticky.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AccessoryDetails = ({ match }) => {
    let productId = match.params.id;

    const [product, setProduct] = useState({});
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadSingleProduct = () => {
        setLoading(true)
        getAccessory(productId).then((res) => {
            console.log("Image Details ===>", res)
            setProduct(res.data)
            setLoading(false);
        })
    }

    useEffect(() => {
        loadSingleProduct();
    }, [productId]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Helmet>
                <title>Accessory Details</title>
                <meta name="description" content="MobileShop Accessory Details" />
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

            <section class="mb-4 pt-3">

                <div class="container" id="wrapper">
                    {loading && <LoadSpinner />}
                    <div class="col" id="pd-top-links">
                        <ul class="breadcrumb bg-transparent p-0 justify-content-lg-start">
                            <li class="breadcrumb-item opacity-50">
                                <Link class="text-reset" to="/">Home</Link>
                            </li>
                            <li class="text-dark fw-600 breadcrumb-item">
                                <Link class="text-reset" to="/">{product.category ? product.category.name : ''}</Link>
                            </li>
                            <li class="text-dark fw-600 breadcrumb-item">
                                <Link class="text-reset" to="/">{product.subs ? product.subs.name : ''}</Link>
                            </li>
                        </ul>
                    </div>


                    <div class="bg-white shadow-sm rounded p-3">
                        <div class="row">
                            <div class="col-xl-5 col-lg-6 mb-3">
                                <ProductImage product={product} />
                            </div>

                            <div class="col-xl-7 col-lg-6 mb-3">
                                <ProductInfo product={product} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* <ProductSpecs product={product} related={related} /> */}
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

export default AccessoryDetails;
