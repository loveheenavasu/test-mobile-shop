import React, { useState } from "react";
import { toast } from "react-toastify";
import LoadSpinner from '../../../components/Spinner';
import { createCategory } from "../../../functions/category";

const AddCategory = ({history}) => {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        createCategory({ name })
            .then((res) => {
                setLoading(false);
                setName("");
                history.push('/admin/categories')
                toast.success(` Category "${res.data.name}" has been created successfully`);
            })
            .catch((err) => {
                setLoading(false);
                if (err.response.status === 400) toast.error("Error while creating category");
            });
    };

    return (
        <>
            <div class="aiz-titlebar text-left mt-2 mb-3">
                <h5 class="mb-0 h6">Add New Category</h5>
            </div>
            <div class="col-md-10 mx-auto">
                <form class="form form-horizontal mar-top" onSubmit={handleSubmit}>
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0 h6">Category Information</h5>
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label>Category Name</label>
                                    <input type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Category Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 text-right">
                        <button type="submit" name="button" class="btn btn-primary">
                            {loading ? <LoadSpinner /> : 'Add Category'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddCategory
