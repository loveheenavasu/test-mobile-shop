/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import BrandNew from './brand-new';
import UkUsed from './uk-used';
import { getAllProducts, getPopularHits, getQueryPopularHits } from "../../functions/products";
import Helmet from 'react-helmet';
import Popular from './most-popular';



import algoliasearch from 'algoliasearch';
import { ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX, ALGOLIA_PRODUCT_INDEX } from '../../helpers/algolia';

const searchClient = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY);
const index = searchClient.initIndex(ALGOLIA_PRODUCT_INDEX);


const Phones = () => {
	const [currentTab, setCurrentTab] = useState('brandnew');
	const [products, setProducts] = useState([]);
	const [popularElm, setPopularElm] = useState([]);
	const [loading, setLoading] = useState(false);

	const renderView = () => {
		if (currentTab === 'popular') {
			return <Popular
				products={popularElm}
				loading={loading}
			/>;
		}
		if (currentTab === 'brandnew') {
			return <BrandNew
				products={products}
				loading={loading}
			/>;
		}
		if (currentTab === 'ukused') {
			return <UkUsed
				products={products}
				loading={loading}
			/>;
		}
	}

	const fetchAllProducts = () => {
		setLoading(true);
		getAllProducts().then((res) => {
			setProducts(res.data);
			setLoading(false);
		});
	};

	const fetchPopularHits = () => {
		setLoading(true);
		// getPopularHits()
		getQueryPopularHits()
			.then((res) => {
				if (res) {
					const popularProducts = res.data.hits;
					if (popularProducts) {
						const popularHits = popularProducts.map((item, i) => item.hit !== null ? item.hit : item);
						index.getObjects(popularHits).then(({ results }) => {
							const data = results.filter((item) => item !== null && item !== undefined);
							setPopularElm(data);
						});
					} else {
						console.log("popular hits is not retrieved...");
					}
				} else {
					console.log('error occured in fetching popular products from algolia.');
				}
			}
		);
	}

	useEffect(() => {
		fetchAllProducts();
		fetchPopularHits();
	}, []);

	return (
		<>
			<Helmet>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
			</Helmet>
			<nav class="nav nav-pills nav-justified">
				<a class={`nav-item nav-link mr-1 text-center text-capitalize  ${currentTab === 'brandnew' ? 'select' : 'tabtext_new'}`} onClick={() => setCurrentTab('brandnew')} >Brand New</a>
				<a class={`nav-item nav-link ml-1 text-center text-capitalize  ${currentTab === 'ukused' ? 'select' : 'tabtext'}`} onClick={() => setCurrentTab('ukused')} >UK-Used</a>
				<a class={`nav-item nav-link mr-1 text-center text-capitalize  ${currentTab === 'popular' ? 'select' : 'tabtext'}`} onClick={() => setCurrentTab('popular')} >Top Selling</a>
			</nav>
			<div className="" style={{ paddingTop: "1%" }}>
				{renderView()}
			</div>
		</>
	)
}

export default Phones
