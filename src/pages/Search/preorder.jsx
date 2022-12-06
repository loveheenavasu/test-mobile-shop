import React, { useState } from "react";
import {withRouter} from 'react-router-dom';
import { toast } from "react-toastify";
import Spinner from '../../components/Spinner';
import { createPreOrder } from "../../functions/orders";

const PreOrder = ({ history }) => {
    const [names, setNames] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [phonenumber, setPhoneNumber] = useState('');
    const [product, setProduct] = useState('');
    const [description, setDescription] = useState('');

    const preOrder = (e) => {
        e.preventDefault();
        setLoading(true)

        const data = {
            product,
            description,
            address,
            email,
            phonenumber,
            names
        }

        createPreOrder(data)
            .then((res) => {
                setLoading(false);
                history.push('/')
                toast.success("Pre Order Details Successfully Captured");
            })
            .catch((err) => {
                setLoading(false);
                toast.error("Error Ecountered in Capturing Pre Order Details");
            });
    }

    return (
        <>
            <div class="card shadow-sm border-0 rounded">
                <div class="card-header p-3">

                    <div class="alert alert-danger" role="alert">
                        <span class="fw-600">
                            No Search Results Found. Kindly Make a Pre-Order By Filling in Details Below
                 </span>
                    </div>
                </div>
                <div class="card-body">

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-10">
                                <input type="text" class="form-control mb-3" name="names" placeholder="Enter Full Names" value={names}
                                    onChange={(e) => setNames(e.target.value)} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10">
                                <input type="text" class="form-control mb-3" name="product" placeholder="Enter Phone Name e.g iPhone 11" value={product}
                                    onChange={(e) => setProduct(e.target.value)} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10">
                                <input type="email" class="form-control mb-3" name="email" placeholder="Enter Email Address" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10">
                                <input type="text" class="form-control mb-3" name="address" placeholder="Enter Delivery Address" value={address}
                                    onChange={(e) => setAddress(e.target.value)} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10">
                                <input type="text" class="form-control mb-3" name="phonenumber" placeholder="Enter Phone Number" value={phonenumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10">
                                <textarea type="text" rows="4" class="form-control mb-3" name="phone" placeholder="Enter specifications of Phone you are looking for e.g memory, space, ram" value={description}
                                    onChange={(e) => setDescription(e.target.value)} />
                            </div>
                        </div>

                        <div class="col-12 float-right">
                            <button onClick={preOrder} type="button" class="btn btn-primary text-uppercase fw-600">
                                {loading ? <Spinner /> : <span>Pre Order</span>}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="alert alert-info" role="alert">
                <span class="fw-600">
                    Pre-Ordered Items take between 3-5 working days. Our Sales Team will get in touch with you shortly.
                 </span>
            </div>
        </>

    )
}

export default withRouter(PreOrder);
