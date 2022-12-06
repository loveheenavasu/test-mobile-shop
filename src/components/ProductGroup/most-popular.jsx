/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import _ from "lodash";
import Product from '../../components/Product'
import LoadSpinner from '../../components/Spinner'
import Pagination from '../Pagination';


const Popular = ({ products, loading }) => {
	const [productsPerPage] = useState(50);
	const [currentpage, setCurrentPage] = useState(1);

	const lastProduct = currentpage * productsPerPage;
	const firstProduct = lastProduct - productsPerPage;

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const brandnew = products.filter(product => product?.condition && product.condition === "Uk Used");

	// for algolia products
	const topSelling = products

	const random = _.sampleSize(brandnew, brandnew.length);
	const newRandom = _.sampleSize(topSelling, topSelling.length)

	const currentProducts = products.slice(firstProduct, lastProduct);
	// const totalProducts = random.length;

	const newCurrentProducts = newRandom.slice(firstProduct, lastProduct);
	const newTotalProducts = newRandom.length


	return (
		<div>
			{loading && <LoadSpinner />}
			{
				currentProducts && currentProducts.length > 0 ?
					<div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
						{currentProducts.map(product => (
							<Product product={product} />
						))}
					</div> : <LoadSpinner />
			}

			<Pagination
				paginate={paginate}
				productsPerPage={productsPerPage}
				currentpage={currentpage}
				firstProduct={firstProduct}
				currentProducts={newCurrentProducts}
				totalProducts={newTotalProducts}
			/>
		</div>
	)
}
export default Popular;


