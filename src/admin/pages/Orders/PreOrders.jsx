import React, { useState, useEffect } from 'react'
import { getPreOrders } from "../../../functions/orders";
import LoadSpinner from '../../../components/Spinner';

const PreOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadOrders = () => {
        setLoading(true);
        getPreOrders().then((c) => {
            setOrders(c.data)
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
                        <h5 class="mb-md-0 h6">Pre Orders</h5>
                    </div>
                    <div class="col-lg-2">
                        <div class="form-group mb-0">
                            <input type="text" class="aiz-date-range form-control" value="" name="date" placeholder="Filter by date" data-format="DD-MM-Y" data-separator=" to " data-advanced-range="true" autocomplete="off" />
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-12 table-responsive">
                            <table class="table aiz-table mb-0 footable footable-1 breakpoint-lg" >
                                <thead>
                                    <tr class="footable-header">
                                        <th data-breakpoints="md" style={{ display: 'table-cell' }}>Product</th>
                                        <th data-breakpoints="md" style={{ display: 'table-cell' }}>Phone Number</th>
                                        <th data-breakpoints="md" style={{ display: 'table-cell' }}>Names</th>
                                        <th data-breakpoints="md" style={{ display: 'table-cell' }}>Description</th>
                                        <th data-breakpoints="md" style={{ display: 'table-cell' }}>Email</th>
                                        <th data-breakpoints="md" style={{ display: 'table-cell' }}>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr>
                                            <td style={{ display: 'table-cell' }}>
                                                {order.product}
                                            </td>
                                            <td style={{ display: 'table-cell' }}>
                                                {order.phonenumber}
                                            </td>
                                            <td style={{ display: 'table-cell' }}>
                                                {order.names}
                                            </td>
                                            <td style={{ display: 'table-cell' }}>
                                                {order.description}
                                            </td>
                                            <td style={{ display: 'table-cell' }}>
                                                <span class="badge badge-inline badge-success">{order.email}</span>
                                            </td>
                                            <td style={{ display: 'table-cell' }}>
                                                <span class="badge badge-inline badge-success">{order.address}</span>
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

export default PreOrders
