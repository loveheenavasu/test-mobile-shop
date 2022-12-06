import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import LoadSpinner from '../../../components/Spinner';
import { getAllStaff, removeStaff } from "../../../functions/staff";

const ListStaff = () => {
    const [staff, setStaff] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [total, setTotal] = useState(0);

    const pages = new Array(totalPages).fill(null).map((v, i) => i);
    const searchHandler = (e) => setSearchTerm(e.target.value);

    const goToPrevious = () => {
        setPageNumber(Math.max(0, pageNumber - 1))
        window.scrollTo(0, 0)
    }

    const goToNext = () => {
        setPageNumber(Math.min(totalPages - 1, pageNumber + 1))
        window.scrollTo(0, 0)
    }

    const loadAllStaff = () => {
        setLoading(true);
        getAllStaff(pageNumber)
            .then((res) => {
                setStaff(res.data.staff);
                setTotalPages(res.data.totalPages)
                setTotal(res.data.total)
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    const handleRemove = (slug) => {
        if (window.confirm("Delete?")) {
            removeStaff(slug)
                .then((res) => {
                    getAllStaff();
                    toast.error(`${res.data.title} is deleted`);
                })
                .catch((err) => {
                    if (err.response.status === 400) toast.error(err.response.data);
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        loadAllStaff();
        window.scrollTo(0, 0)
    }, [pageNumber]);
    return (
        <>
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h1 class="h3">Mobile shop staff</h1>
                </div>
                <div class="col-md-6 text-md-right">
                    <Link to="/admin/registerStaff" class="btn btn-primary">
                        <span>Add New Staff</span>
                    </Link>
                </div>
            </div>

            <div class="card">
                {loading && <LoadSpinner />}
                <div class="card-header">
                    <h5 class="mb-0 h6">Staff</h5>
                    <div class="pull-right clearfix">
                        <form>
                            <div class="box-inline pad-rgt pull-left">
                                <div class="" style={{ minWidth: '200px' }}>
                                    <input type="text" class="form-control" name="searchTerm" placeholder="search staff.." value={searchTerm} onChange={searchHandler} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-12 table-responsive">
                            <table class="table aiz-table mb-0 footable footable-1 breakpoint-lg">
                                <thead>
                                    <tr class="footable-header">
                                        <th style={{ display: 'table-cell' }}>First Name</th>
                                        <th style={{ display: 'table-cell' }}>Last Name</th>
                                        <th style={{ display: 'table-cell' }}>User Name</th>
                                        <th sstyle={{ display: 'table-cell' }}>Date Created</th>
                                        <th style={{ display: 'table-cell' }}>Role</th>
                                        <th width="10%" class="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {staff.map((s) => (
                                        <tr>
                                            <td style={{ display: 'table-cell' }}>{s.firstName}</td>
                                            <td style={{ display: 'table-cell' }}>{s.lastName}</td>
                                            <td style={{ display: 'table-cell' }}>{s.username}</td>
                                            <td style={{ display: 'table-cell' }}>{dayjs(setLoading.createdAt).format('l')}</td>
                                            <td style={{ display: 'table-cell' }}>{s.role}</td>
                                            <td class="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                <Link class="btn btn-soft-primary btn-icon btn-circle btn-sm" to={`/admin/updateaccessory/${s._id}`} title="Edit">
                                                    <i class="las la-edit"></i>
                                                </Link>
                                                <span class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" onClick={() => handleRemove(s._id)} title="Delete">
                                                    <i class="las la-trash"></i>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="aiz-pagination">
                        <nav className="text-center">
                            <span>Showing 1- 20 of {total} results</span>
                            <ul class="pagination d-flex justify-content-center">
                                <li class="page-item" onClick={goToPrevious}>
                                    <span class="page-link">‹</span>
                                </li>
                                <li class="page-item d-flex">
                                    {pages.map((pageIndex) => (
                                        <a key={pageIndex} class="page-link" onClick={() => setPageNumber(pageIndex)}>{pageIndex + 1}</a>
                                    ))}
                                </li>
                                <li class="page-item" onClick={goToNext}>
                                    <span class="page-link">›</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListStaff
