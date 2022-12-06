import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { updateSub } from "../../../functions/sub";
import LoadSpinner from '../../../components/Spinner';
import { getCategories } from "../../../functions/category";
import { getSub } from "../../../functions/sub";

const EditBrands = ({ history, match }) => {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");

    const loadCategories = () => getCategories().then((c) => setCategories(c.data));

    const loadSub = () =>
        getSub(match.params.slug).then((s) => {
            setName(s.data.sub.name);
            setCategory(s.data.sub.parent);
        });

    useEffect(() => {
        loadCategories();
        loadSub();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        updateSub(match.params.slug, { name, parent: category })
            .then((res) => {
                setLoading(false);
                setName("");
                toast.success(`"${res.data.name}" is updated`);
                history.push("/admin/brands");
            })
            .catch((err) => {
                setLoading(false);
                if (err.response.status === 400) toast.error(err.response.data);
            });
    };

    return (
        <>
            <div class="aiz-titlebar text-left mt-2 mb-3">
                <h5 class="mb-0 h6">Update Brand</h5>
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
                                    <label>Category</label>
                                    <select
                                        name="category"
                                        value={category}
                                        className="form-control"
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option>Please select category</option>
                                        {categories.length > 0 &&
                                            categories.map((c) => (
                                                <option key={c._id} value={c._id}>
                                                    {c.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label>Brand Name</label>
                                    <input type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Brand Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
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

export default EditBrands
