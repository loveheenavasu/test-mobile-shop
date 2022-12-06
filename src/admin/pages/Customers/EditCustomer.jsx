import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { updateSub } from "../../../functions/sub";
import LoadSpinner from '../../../components/Spinner';
import { getUserDetails } from "../../../functions/users";

const EditCustomer = ({ history, match }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [phonenumber, setPhonenumber] = useState({});
    const [loading, setLoading] = useState(false);

    const loadUser = () =>
        getUserDetails(match.params.id).then((s) => {
            setPhonenumber(s.data.phonenumber);
            setIsAdmin(s.data.isAdmin);
        });

    useEffect(() => {
        loadUser();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        updateSub(match.params.id, { phonenumber, isAdmin })
            .then((res) => {
                setLoading(false);
                toast.success(`"${res.data.name}" is updated`);
                history.push("/admin/users");
            })
            .catch((err) => {
                setLoading(false);
                if (err.response.status === 400) toast.error(err.response.data);
            });
    };

    return (
        <>
            <div class="aiz-titlebar text-left mt-2 mb-3">
                <h5 class="mb-0 h6">Update User Role</h5>
            </div>
            <div class="col-md-10 mx-auto">
                <form class="form form-horizontal mar-top" onSubmit={handleSubmit}>
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0 h6">Brand Information</h5>
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label>Phone Name</label>
                                    <input type="text"
                                        name="phonenumber"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        value={phonenumber}
                                        onChange={(e) => setPhonenumber(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <h5 class="mb-0 h6">isAdmin: {isAdmin}</h5>
                                    <label class="aiz-checkbox">
                                        <input type="checkbox" checked={isAdmin} value={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
                                        <span class="aiz-square-check"></span>
                                    </label>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 text-right">
                        <button type="submit" name="button" class="btn btn-primary">
                            {loading ? <LoadSpinner /> : 'Update Brand'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditCustomer
