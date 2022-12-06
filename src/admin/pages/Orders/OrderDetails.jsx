import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { getOrderDetails } from "../../../functions/orders";
import LoadSpinner from '../../../components/Spinner';

const OrderDetails = ({ match }) => {
    const id = match.params.id

    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(false);

    const auth = useSelector(state => state.auth);

    const loadOrders = () => {
        setLoading(true);
        getOrderDetails(id, auth.token).then((c) => {
            setOrder(c.data)
            setLoading(false);
        });
    }

    useEffect(() => {
        loadOrders();
    }, []);


    return (
        <div class="card">
            {loading && <LoadSpinner />}
            <div class="card-header">
                <h1 class="h2">Order Details</h1>
            </div>
            <div class="card-header row gutters-5">
                <div class="col text-center text-md-left">
                </div>
                <div class="col-md-3 ml-auto">
                    <label for="update_payment_status&quot;&quot;">Payment Status</label>
                    <div class="dropdown bootstrap-select form-control aiz-">
                        <select class="form-control aiz-selectpicker" data-minimum-results-for-search="Infinity" id="update_payment_status" tabindex="-98">
                            <option value="paid" selected="">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                        <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="update_payment_status" title="Paid">
                            <div class="filter-option">
                                <div class="filter-option-inner">
                                    <div class="filter-option-inner-inner">Paid</div>
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
                <div class="col-md-3 ml-auto">
                    <label for="update_delivery_status&quot;&quot;">Delivery Status</label>
                    <div class="dropdown bootstrap-select form-control aiz-">
                        <select class="form-control aiz-selectpicker" data-minimum-results-for-search="Infinity" id="update_delivery_status" tabindex="-98">
                            <option value="pending" selected="">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="on_delivery">On delivery</option>
                            <option value="delivered">Delivered</option>
                        </select>
                        <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" data-id="update_delivery_status" title="Pending">
                            <div class="filter-option">
                                <div class="filter-option-inner">
                                    <div class="filter-option-inner-inner">Pending</div>
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
            </div>
            <div class="card-header row gutters-6">
                <div class="col text-center text-md-left">
                    <address>
                        <strong class="text-main">{order.name}</strong><br />
                        {order.email}<br />
                        {order.address}<br />
                        Kampala, uganda<br />
                    </address>
                </div>
                <div class="col-md-4 ml-auto">
                    <table>
                        <tbody>
                            <tr>
                                <td class="text-main text-bold">Order Id #</td>
                                <td class="text-right text-info text-bold">{order._id}</td>
                            </tr>
                            <tr>
                                <td class="text-main text-bold">Order status</td>
                                <td class="text-right">
                                    <span class="badge badge-inline badge-info">Pending</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-main text-bold">Order date</td>
                                <td class="text-right">{order.createdAt}</td>
                            </tr>
                            <tr>
                                <td class="text-main text-bold">Total amount</td>
                                <td class="text-right">
                                    {order.totalPrice}
                                </td>
                            </tr>
                            <tr>
                                <td class="text-main text-bold">Payment Method</td>
                                <td class="text-right">{order.paymentMethod}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card-body">
                <div class="invoice-bill row">
                    <div class="col-sm-6">
                    </div>
                    <div class="col-sm-6">
                    </div>
                </div>
                <hr class="new-section-sm bord-no" />
                <div class="row">
                    <div class="col-lg-12 table-responsive">
                        <table class="table table-bordered invoice-summary">
                            <thead>
                                <tr class="bg-trans-dark">
                                    <th class="min-col">#</th>
                                    <th width="10%">Photo</th>
                                    <th class="text-uppercase">Description</th>
                                    <th class="min-col text-center text-uppercase">Qty</th>
                                    <th class="min-col text-center text-uppercase">Price</th>
                                    <th class="min-col text-right text-uppercase">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.orderItems && order.orderItems.length ? order.orderItems.map((item) =>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img height="50px" src={item.images} />
                                        </td>
                                        <td>
                                            <strong><a href="#" target="_blank" class="text-muted">{item.title}</a></strong>
                                            <small></small>
                                        </td>
                                        <td class="text-center">1</td>
                                        <td class="text-center">
                                            {item.discount ? item.discountprice : item.price}
                                        </td>
                                        <td class="text-center">{item.totalPrice}</td>
                                    </tr>

                                ) : ''}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="clearfix float-right">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td><strong class="text-muted">Sub Total :</strong></td>
                                <td>
                                    {order.totalPrice}
                                </td>
                            </tr>
                            <tr>
                                <td><strong class="text-muted">Tax :</strong></td>
                                <td>0.00</td>
                            </tr>
                            <tr>
                                <td><strong class="text-muted"> Shipping :</strong></td>
                                <td>0.00</td>
                            </tr>
                            <tr>
                                <td><strong class="text-muted">Total :</strong></td>
                                <td class="text-muted h5">
                                    {order.totalPrice}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-right no-print">
                        <a href="#" type="button" class="btn btn-icon btn-light"><i class="las la-print"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails
