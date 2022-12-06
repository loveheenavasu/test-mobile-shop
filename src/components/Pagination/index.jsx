/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, firstProduct, currentProducts}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
        window.scrollTo(0, 50);
    }

    return (
        <div class="aiz-pagination aiz-pagination-center mt-4 mb-5">
           
            <nav>
                <ul class="pagination">
                    {/* <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
                        <a class="page-link" onClick={goToPreviousPage} href="#" rel="next" aria-label="Next »">›</a>
                    </li> */}
                    {pageNumbers.map((item, index) => (
                        <li class="page-item">
                            <a class="page-link"
                                key={index}
                                onClick={() => paginate(item)}
                                className="page-link"
                            >
                                <span>{item}</span>
                            </a>
                        </li>
                    ))}
                    {/* <li class="page-item">
                        <a class="page-link" onClick={goToNextPage} href="#" rel="next" aria-label="Next »">›</a>
                    </li> */}
                </ul>
            </nav>
            <div className="text-center mb-0 pb-1">
            Showing
            {' '}
            <span>
              (
              {firstProduct + 1}
              {' '}
              to
              {' '}
              {firstProduct + currentProducts.length}
              ) of
              {' '}
              {totalProducts}
            </span>
            {' '}
            Products
          </div>
        </div>
    );
};

export default Pagination;