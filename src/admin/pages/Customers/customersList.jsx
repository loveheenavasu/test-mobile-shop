import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import LoadSpinner from '../../../components/Spinner';
import { getUsers } from "../../../functions/users";

const CustomerList = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const auth = useSelector(state => state.auth);

  const loadUsers = () => {
    setLoading(true);
    getUsers(auth.token)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);


    return (
        <>
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h4 class="h3">All Customers</h4>
                </div>
                <div class="col-md-6 text-md-right">
                    
                </div>
            </div>

            <div class="card">
            {loading && <LoadSpinner />}
                <div class="card-header">
                    <h5 class="mb-0 h6">Customers</h5>
                    <div class="pull-right clearfix">
                        <form class="" id="sort_categories" action="" method="GET">
                            <div class="box-inline pad-rgt pull-left">
                                <div class="" style={{minWidth: '200px'}}>
                                    <input type="text" class="form-control" id="search" name="search" placeholder="Type name &amp; Enter" />
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
                                <th style={{ display: 'table-cell' }}>Phone Number</th>
                                <th style={{ display: 'table-cell' }}>isAdmin</th>
                                <th style={{ display: 'table-cell' }}>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr>
                                <td style={{ display: 'table-cell' }}>{user.phonenumber}</td>
                                <td style={{ display: 'table-cell' }}>{user.isAdmin}</td>
                                <td style={{ display: 'table-cell' }}>
                                    <Link to={`/admin/customers/${user._id}`} class="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                        <i class="las la-edit"></i>
                                    </Link>
                                    <span class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" title="Delete">
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
                        <nav>
                            <ul class="pagination">
                                <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                    <span class="page-link" aria-hidden="true">‹</span>
                                </li>
                                <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="" rel="next" aria-label="Next »">›</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CustomerList
