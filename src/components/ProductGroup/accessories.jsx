import React, { useState, useEffect } from 'react';
import _ from "lodash";
import Pagination from '../Pagination';
import LoadSpinner from '../../components/Spinner';
import Accessory from '../../components/Product/accessory';
import { getAccessories } from "../../functions/accessory";

const Accessories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsPerPage] = useState(50);
  const [currentpage, setCurrentPage] = useState(1);

  const lastProduct = currentpage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const random = _.sampleSize(products, products.length);

  const currentProducts = random.slice(firstProduct, lastProduct);
  const totalProducts = random.length;

  const fetchAllProducts = () => {
    setLoading(true);
    getAccessories().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      {loading && <LoadSpinner />}
      {
        products && products.length > 0 ?
          <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2">
            {currentProducts.map(product => (
              <Accessory product={product} />
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

export default Accessories;
