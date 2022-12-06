import axios from "axios";


import { ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY_ACL, ALGOLIA_PRODUCT_INDEX, ALGOLIA_API, ALGOLIA_ITEMS_LIMIT, ALGOLIA_ITEMS_LIMIT_20, ALGOLIA_END_DATE, ALGOLIA_START_DATE } from "../helpers/algolia";

export const createProduct = async (product, token) =>
	await axios.post(`${process.env.REACT_APP_API}/product`, product, {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});

export const getProducts = async (pageNumber) =>
	await axios.get(`${process.env.REACT_APP_API}/product?page=${pageNumber}`);

export const getAllProducts = async () =>
	await axios.get(`${process.env.REACT_APP_API}/product/all`);

export const searchProducts = async () =>
	await axios.get(`${process.env.REACT_APP_API}/product/search`);

export const getProductsByCount = async (count) =>
	await axios.get(`${process.env.REACT_APP_API}/product/${count}`);

export const removeProduct = async (slug) =>
	await axios.delete(`${process.env.REACT_APP_API}/product/${slug}`);

export const getProduct = async (id) =>
	await axios.get(`${process.env.REACT_APP_API}/product/prod/${id}`);

export const getProductBrands = async (slug) =>
	await axios.get(`${process.env.REACT_APP_API}/product/${slug}`);

export const getProductTypes = async (condition) =>
	await axios.get(`${process.env.REACT_APP_API}/product/${condition}`);

export const updateProduct = async (id, product) =>
	await axios.put(`${process.env.REACT_APP_API}/product/${id}`, product);

export const getProductsCount = async () =>
	await axios.get(`${process.env.REACT_APP_API}/product/total`);

export const productStar = async (productId, star, authtoken) =>
	await axios.put(
		`${process.env.REACT_APP_API}/product/star/${productId}`,
		{ star },
		{
			headers: {
				authtoken,
			},
		}
	);

export const getRelated = async (productId) => await axios.get(`${process.env.REACT_APP_API}/product/related/${productId}`);

export const fetchProductsByFilter = async (arg) => await axios.post(`${process.env.REACT_APP_API}/product/search/filters`, arg);

// for ai-recomendations from algolia on search suggestion page...
export const getPopularHits = async () => await axios.get(`${ALGOLIA_API}?index=${ALGOLIA_PRODUCT_INDEX}&startDate=${ALGOLIA_START_DATE}&endDate=${ALGOLIA_END_DATE}&limit=${ALGOLIA_ITEMS_LIMIT_20}&orderBy=searchCount&direction=desc&clickAnalytics=true`, { options: 'GET', headers: { 'X-Algolia-API-Key': ALGOLIA_API_KEY_ACL, 'X-Algolia-Application-Id': ALGOLIA_APPLICATION_ID } });

// for top selling products based on top searches on home page...
export const getQueryPopularHits = async () => await axios.get(`${ALGOLIA_API}?index=${ALGOLIA_PRODUCT_INDEX}&startDate=${ALGOLIA_START_DATE}&endDate=${ALGOLIA_END_DATE}&limit=${ALGOLIA_ITEMS_LIMIT}&orderBy=searchCount&direction=desc&clickAnalytics=true`, { options: 'GET', headers: { 'X-Algolia-API-Key': ALGOLIA_API_KEY_ACL, 'X-Algolia-Application-Id': ALGOLIA_APPLICATION_ID } });


// get product lists using array of ids 
export const getProductListById = async (list) =>
	await axios.post(`${process.env.REACT_APP_API}/product/images`, list);