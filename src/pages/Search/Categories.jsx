import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Filters from './Filters';
import Product from '../../components/Product';
import LoadSpinner from '../../components/Spinner';
import Browse from '../../components/Browser/Browse';
import Pagination from '../../components/Pagination';
import { getProductBrands } from "../../functions/products";
import Footer from '../../components/Layout/Footer/index';
import BottomFooter from '../../components/Layout/Footer/BottomFooter';
import PreOrder from './preorder.jsx';
import { Helmet } from "react-helmet";
import './style.css';


const Categories = ({ match }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

    const { slug } = match.params;
    useEffect(() => {
        setLoading(true);
        getProductBrands(slug).then((res) => {
            // const newList = shuffle(res.data);
            const randomResponse = shuffle(res.data);
            setProducts(randomResponse);
            setLoading(false);
        });
    }, [slug]);

    const metaTitle = (slug) => {
        switch (slug) {
            case "tecno":
                return 'Tecno Shop Uganda | Buy Tecno Mobiles Online at Best Prices | MobileShop Ug';
            case "hisense":
                return 'Online Shopping for Electronics, smartphones, TV | MobileShop Ug';
            case "apple":
                return 'Apple Shop Uganda, Buy Latest iPhones Online | MobileShop Ug';
            case "jbl-speakers":
                return 'JBL Bluetooth Speakers Price in Uganda | Best Bluetooth Speakers | MobileShop Ug';
            case "samsung":
                return 'Latest Samsung Phones | Buy Samsung Mobile Phones Online | MobileShop Ug';
            default:
                return ''
        };
    };

    const metaDescription = (slug) => {
        switch (slug) {
            case "tecno":
                return 'Tecno Mobile Shop Uganda. Huge range of Tecno Mobiles in different models and prices. Choose Tecno Mobile online as per your budget and requirement. Fastest Shipping.';
            case "hisense":
                return 'MobileShop Ug online shopping centre, we offer the best price on smartphones, electronics, home and TV Order Now!';
            case "apple":
                return 'End your search for best online Apple Shop in Uganda. Buy latest range of iPhones online at best prices. Fastest Shipping!';
            case "jbl-speakers":
                return 'Explore the JBL Bluetooth Speakers Price in Uganda. Buy Ultra-Portable Bluetooth Speakers comfort from your home.';
            case "samsung":
                return 'Latest range of Samsung Mobile Phones available online in different models and color. Order Now! Fastest Shipping!'
            default:
                return ''
        };
    };

    const metaKeyword = (slug) => {
        switch (slug) {
            case "tecno":
                return 'Tecno shop uganda';
            case "hisense":
                return 'Hisense uganda products and prices';
            case "apple":
                return 'Apple shop uganda, Buy iphone online, Latest iPhones';
            case "jbl-speakers":
                return 'Jbl Bluetooth speaker price in uganda, Jbl speakers price';
            case "samsung":
                return 'Latest Samsung phones'
            default:
                return ''
        };
    };



    return (
        <>
            <Helmet>
                <title>{metaTitle(slug)}</title>
                <meta name="description" content={metaDescription(slug)} />
                <meta name="keywords" content={metaKeyword(slug)} />
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
                {/* {loading && <LoadSpinner />} */}
                <div class="container sm-px-0" >
                    <form class="" id="search-form" action="" method="GET">
                        <div class="row">
                            <div class="col-xl-3 d-none d-lg-block">
                                <Filters />
                            </div>
                            <div class="col-xl-9">
                                <ul class="breadcrumb bg-transparent p-0">
                                    <li class="breadcrumb-item opacity-50">
                                        <Link class="text-reset" to="/">Home</Link>
                                    </li>
                                    <li class="breadcrumb-item opacity-50">
                                        <a class="text-reset" href="#">All Categories</a>
                                    </li>
                                </ul>
                                <div class="text-left">
                                    <Browse />
                                </div>
                                <input type="hidden" name="min_price" value="" />
                                <input type="hidden" name="max_price" value="" />
                                {
                                    products ?
                                        <div class="row gutters-5 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-4 row-cols-md-3 row-cols-2">
                                            {products && products.length > 0 ? products.map(item => (
                                                <Product product={item} />
                                            )) : <LoadSpinner />}
                                        </div> : <p>No Products in this Category Yet!</p>
                                }
                                <PreOrder />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='d-none d-lg-block' style={{ marginBottom: "-2%" }} >
                    <Footer />
                    <BottomFooter />
                </div>
            </section>
        </>
    )
}

export default React.memo(Categories)
