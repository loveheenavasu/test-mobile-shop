/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import LoadSpinner from '../../../components/Spinner';
import { getSubs, removeSub } from "../../../functions/sub";

const BrandsList = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(false);

    const auth = useSelector(state => state.auth);

    const loadBrands = () => {
        setLoading(true);
        getSubs().then((c) => {
            setBrands(c.data)
            setLoading(false);
        });
    }

    useEffect(() => {
        loadBrands();
    }, []);

    const deleteBrand = async (slug) => {
        if (window.confirm("Are you Sure you want to Delete this Brand?")) {
            setLoading(true);
            removeSub(slug)
                .then((res) => {
                    setLoading(false);
                    toast.error(res.data.message);
                    loadBrands();
                })
                .catch((err) => {
                        setLoading(false);
                        toast.error("Brand Successfully Deleted");
                });
        }
    };


    return (
        <div class="card">
            {loading && <LoadSpinner />}
            <form class="" id="sort_orders" action="" method="GET">
                <div class="card-header row gutters-5">
                    <div class="col text-center text-md-left">
                        <h5 class="mb-md-0 h6">MobileShop Brands List</h5>
                    </div>
                    <div class="col-auto">
                        <div class="form-group mb-0">
                            <Link to="/admin/addbrand">
                                <button type="submit" class="btn btn-primary">Add Brand</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-12 table-responsive">
                            <table class="table aiz-table mb-0 footable footable-1 breakpoint-lg" >
                                <thead>
                                    <tr class="footable-header">
                                        <th style={{ display: 'table-cell' }}>Category Id</th>
                                        <th data-breakpoints="md" style={{ display: 'table-cell' }}>
                                            Brand Name
                                        </th>
                                        <th class="text-right footable-last-visible" width="15%" style={{ display: 'table-cell' }}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {brands.map((brand) => (
                                        <tr>
                                            <td style={{ display: 'table-cell' }}>
                                                {brand._id}
                                            </td>
                                            <td style={{ display: 'table-cell' }}>
                                                {brand.name}
                                            </td>
                                            <td class="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                <Link to={`/admin/brand/${brand.slug}`} class="btn btn-soft-primary btn-icon btn-circle btn-sm" title="View">
                                                    <i class="las la-edit"></i>
                                                </Link>
                                                <a href="#" class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete" onClick={() => deleteBrand(brand.slug)}>
                                                    <i class="las la-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="aiz-pagination">
                        <nav>
                            <ul class="pagination">
                                <li class="page-item disabled" aria-disabled="true" aria-label="?? Previous">
                                    <span class="page-link" aria-hidden="true">???</span>
                                </li>
                                <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" rel="next" aria-label="Next ??">???</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BrandsList
