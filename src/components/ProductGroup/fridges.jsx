/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import _ from "lodash";
import Product from '../../components/Product'
import LoadSpinner from '../../components/Spinner'
import Pagination from '../Pagination';

const Fridges = ({ products, loading }) => {

  const [productsPerPage] = useState(50);
  const [currentpage, setCurrentPage] = useState(1);

  const lastProduct = currentpage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const brandnew = products.filter(product => product.condition === "Fridges")

  const random = _.sampleSize(brandnew, brandnew.length);

  const currentProducts = random.slice(firstProduct, lastProduct);
  const totalProducts = random.length;

  return (
    <div>
      {loading && <LoadSpinner />}
      {
        products && products.length > 0 ?
          <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
            {currentProducts.map(product => (
              <Product product={product} />
            ))}
          </div> : <LoadSpinner />
      }

      <Pagination 
        paginate={paginate} 
        totalProducts={totalProducts}
        productsPerPage={productsPerPage}
        currentpage={currentpage}
        firstProduct={firstProduct}
        currentProducts={currentProducts}
        />
    </div>

  )
}

export default Fridges
