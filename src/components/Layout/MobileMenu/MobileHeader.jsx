/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import LoginModal from "../../../components/Modal/login-modal";
import { getAllProducts } from "../../../functions/products";

import algoliasearch from 'algoliasearch';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import { ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY } from '../../../helpers/algolia';

import ComponentAuto from '../../AutoComplete/CompleteAuto';
import ProductItem from '../../AutoComplete/ProductItem';

import './search.css';

const searchClient = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY);


const MobileHeader = ({ open }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const dispatch = useDispatch();
    const { search } = useSelector((state) => ({ ...state }));
    const { text } = search;

    const history = useHistory();

    const { cartItems } = useSelector((state) => state.cart)

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('phonenumber');
        localStorage.removeItem('role');
        history.push("/");
    }

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const phonenumber = localStorage.getItem('phonenumber');

    const handleChange = (e) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: { text: e.target.value },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?${text}`);
    };

    const fetchAllProducts = () => {
        setLoading(true);
        getAllProducts().then((res) => {
            setProducts(res.data);
            setLoading(false);
        });
    };
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 20 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    useEffect(() => {
        fetchAllProducts();
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    return (
        <>
            {/* <LoginModal modalIsOpen={modalIsOpen} close={closeModal} /> */}
            <div className="d-xl-none d-lg-block z-1020 shadow-sm" style={{ background: '#101622' }}>
                {/* <div class="example1">
                    <span style={{ whiteSpace: "nowrap" }}>
                        <strong className="help float-center pr-2 pb-0 mb-0" style={{ fontSize: 15 + "px", color: 'white' }}>Updated prices every 24 hours | pickup orders; shop at City Plaza Basement 08</strong>
                        <p>Hotline <a href="tel:0809744874"> 0809744874</a></p>
                    </span>
                </div> */}
                <div class="bar" style={{ color: "white" }}>
                    <span class="bar_content text-uppercase fs-14">
                        Prices updated** daily &#128257; | pickup orders at City Plaza B08 |
                        Delivery Hotline<a href="tel:0709744874"> 0709744874</a>
                    </span>
                </div>
                <div className="mobileMidHeader px-2 d-flex justify-content-between">

                    <div className="d-flex justify-content-start mr-2">
                        <div className="pt-3">
                            <i className="las la-bars"
                                style={{ fontSize: '25px', color: '#fff' }}
                                onClick={open}
                            >
                            </i>
                        </div>

                        <Link to="/">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logo.webp`}
                                alt="Logo"
                                width={100}
                                height={60}
                            />
                        </Link>

                    </div>

                    <div className="d-flex justify-content-end align-items-center float-end">
                        <div class="aiz-topbar-item text-white gx-0">
                            <div class="align-items-center d-flex dropdown">
                                {!token ? 
                                    <a class="dropdown-toggle no-arrow text-dark" onClick={openModal}><span class="text-white">
                                        <span class="avatar avatar-sm mr-md-2">
                                            <i class="las la-user" style={{ fontSize: '32px' }}></i>
                                            {/* <small className="text-white position-absolute top-100 start-50 translate-middle" style={{ fontSize: 14 + "px", marginTop: "-12%" }}>Account</small> */}
                                        </span>
                                    </span></a>
                                    : <a class="dropdown-toggle no-arrow text-dark" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                                        <span class="text-white">
                                            <span class="avatar avatar-sm">
                                                <i class="las la-user" style={{ fontSize: '32px', marginRight: "-5%" }}></i>
                                                {/* <small className="text-white position-absolute top-100 start-50 translate-middle" style={{ fontSize: 14 + "px", marginTop: "-12%" }}>Account</small> */}
                                            </span>
                                        </span>
                                    </a>}

                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-md">
                                    {
                                        token ? (
                                            <>
                                                <a href="#" class="dropdown-item">
                                                    <i class="las la-user" style={{ fontSize: '24px' }}></i>
                                                    <span>{phonenumber}</span>
                                                </a>
                                                {role === 'admin' ? <Link to="/admin/dashboard" class="dropdown-item">
                                                    <i class="las la-cog" style={{ fontSize: '24px' }}></i>
                                                    <span>Admin DashBoard</span>
                                                </Link> : ''}
                                                <Link to="#" class="dropdown-item" onClick={logout}>
                                                    <i class="las la-sign-out-alt" style={{ fontSize: '24px' }}></i>
                                                    <span>Logout</span>
                                                </Link>
                                            </>) : (
                                            <a href="#" class="dropdown-item">
                                                <i class="las la-user" style={{ fontSize: '24px' }}></i>
                                                <span>Login</span>
                                            </a>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <Link to='/cart'>
                            <div className="pt-1 text-white gx-0">
                                <div className="d-lg-block mr-0">
                                    <span class="btn btn-icon p-1">
                                        <span class=" position-relative d-inline-block">
                                            <i class="la la-shopping-cart la-2x text-white"></i><br></br>
                                            {/* <small className="text-white" style={{ fontSize: 14 + "px" }}>Cart</small> */}
                                            <span class="badge badge-circle badge-primary position-absolute absolute-top-right">{cartItems.length}</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <a href='https://goo.gl/maps/1UsvmvRsCkFa6h5190'>
                            <div className="text-white gx-0">
                                <div className="d-lg-block mr-0">
                                    <span class=" position-relative d-inline-block">
                                        <img class="" src="/images/locationIcon.png" alt="location" width="48" height="28" />
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <nav className="header-section nav-searchbar-wrapper mt-0">
                    <div style={{ width: '100%', paddingBottom: "5px", marginTop: "0px" }}>
                        <ComponentAuto
                            openOnFocus={true}
                            getSources={({ query }) => [
                                {
                                    sourceId: 'products',
                                    getItems() {
                                        return getAlgoliaResults({
                                            searchClient,
                                            queries: [
                                                {
                                                    indexName: 'products',
                                                    query,
                                                    params: {
                                                        hitsPerPage: 6,
                                                        clickAnalytics: true,
                                                    }
                                                },
                                            ],
                                        });
                                    },
                                    templates: {
                                        item({ item, components }) {
                                            return <ProductItem hit={item} components={components} history={history} />;
                                        },
                                    },
                                },
                                {
                                    sourceId: 'accessory',
                                    getItems() {
                                        return getAlgoliaResults({
                                            searchClient,
                                            queries: [
                                                {
                                                    indexName: 'accessory',
                                                    query,
                                                    params: {
                                                        hitsPerPage: 6,
                                                        clickAnalytics: true,
                                                    }
                                                },
                                            ],
                                        });
                                    },
                                    templates: {
                                        item({ item, components }) {
                                            return (
                                                <>
                                                    <ProductItem hit={item} query={query} components={components} history={history} />
                                                </>
                                            )
                                        },
                                    },
                                },
                            ]} />
                    </div>
                </nav>
            </div>

        </>
    )
}


export default MobileHeader