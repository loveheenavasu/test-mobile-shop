import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { getOrders } from "../../../functions/orders";
import LoadSpinner from '../../../components/Spinner';

const OrdersList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadOrders = () => {
        setLoading(true);
        getOrders().then((c) => {
            const Orders = c.data.sort((a, b) => (b.createdAt - a.createdAt))
            setOrders(Orders)
            setLoading(false);
        });
    }

    useEffect(() => {
        loadOrders();
    }, []);

    return (
        <div class="card">
            {loading && <LoadSpinner />}
            <form class="" id="sort_orders" action="" method="GET">
                <div class="card-header row gutters-5">
                    <div class="col text-center text-md-left">
                        <h5 class="mb-md-0 h6">Inhouse orders</h5>
                    </div>
                    <div class="col-lg-2">
                        <div class="form-group mb-0">
                            <input type="text" class="aiz-date-range form-control" value="" name="date" placeholder="Filter by date" data-format="DD-MM-Y" data-separator=" to " data-advanced-range="true" autocomplete="off" />
                        </div>
                    </div>
                    <div class="col-lg-2 ml-auto">
                        <div class="dropdown bootstrap-select form-control aiz-">
                            <select class="form-control aiz-selectpicker" name="payment_type" id="payment_type" onchange="sort_orders()" tabindex="-98">
                                <option value="">Filter by Payment Status</option>
                                <option value="paid">Paid</option>
                                <option value="unpaid">Un-Paid</option>
                            </select>
                            <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="payment_type" title="Filter by Payment Status">
                                <div class="filter-option">
                                    <div class="filter-option-inner">
                                        <div class="filter-option-inner-inner">Filter by Payment Status</div>
                                    </div>
                                </div>
                            </button>
                            <div class="dropdown-menu ">
                                <div class="inner show" role="listbox" id="bs-select-1" tabindex="-1">
                                    <ul class="dropdown-menu inner show" role="presentation"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 ml-auto">
                        <div class="dropdown bootstrap-select form-control aiz-">
                            <select class="form-control aiz-selectpicker" name="delivery_status" id="delivery_status" onchange="sort_orders()" tabindex="-98">
                                <option value="">Filter by Deliver Status</option>
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="on_delivery">On delivery</option>
                                <option value="delivered">Delivered</option>
                            </select>
                            <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" data-id="delivery_status" title="Filter by Deliver Status">
                                <div class="filter-option">
                                    <div class="filter-option-inner">
                                        <div class="filter-option-inner-inner">Filter by Deliver Status</div>
                                    </div>
                                </div>
                            </button>
                            <div class="dropdown-menu ">
                                <div class="inner show" role="listbox" id="bs-select-2" tabindex="-1">
                                    <ul class="dropdown-menu inner show" role="presentation"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="form-group mb-0">
                            <input type="text" class="form-control" id="search" name="search" placeholder="Type Order code &amp; hit Enter" />
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="form-group mb-0">
                            <button type="submit" class="btn btn-primary">Filter</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                <div class="row">
                    <div class="col-lg-12 table-responsive">
                    <table class="table aiz-table mb-0 footable footable-1 breakpoint-lg" >
                        <thead>
                            <tr class="footable-header">
                                <th data-breakpoints="md" style={{ display: 'table-cell' }}>Customer</th>
                                <th data-breakpoints="md" style={{ display: 'table-cell' }}>Date</th>
                                <th data-breakpoints="md" style={{ display: 'table-cell' }}>Delivery Status</th>
                                <th data-breakpoints="md" style={{ display: 'table-cell' }}>Payment Method</th>
                                <th data-breakpoints="md" style={{ display: 'table-cell' }}>Payment Status</th>
                                <th class="text-right footable-last-visible" width="15%" style={{ display: 'table-cell' }}>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr>
                                    <td style={{ display: 'table-cell' }}>
                                        {order.orderedBy}
                </td>
                <td style={{ display: 'table-cell' }}>
                                        {dayjs(order.createdAt).format('l')}
                                       
                </td>
                
                                    <td style={{ display: 'table-cell' }}>
                                        Pending
                </td>
                                    <td style={{ display: 'table-cell' }}>
                                        Cash On Delivery
                </td>
                                    <td style={{ display: 'table-cell' }}>
                                        <span class="badge badge-inline badge-success">Paid</span>
                                    </td>
                                    <td class="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <Link to={`/admin/order/${order._id}`}class="btn btn-soft-primary btn-icon btn-circle btn-sm" title="View">
                                            <i class="las la-eye"></i>
                                        </Link>
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
                                <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                    <span class="page-link" aria-hidden="true">‹</span>
                                </li>
                                <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" rel="next" aria-label="Next »">›</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default OrdersList
