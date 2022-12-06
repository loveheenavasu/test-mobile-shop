import React from 'react'
import { Link } from 'react-router-dom'
import logo from './SideBar/logo.png'

const TopHeader = () => {

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
    }

    return (
        <div class="aiz-topbar px-15px px-lg-25px d-flex align-items-stretch justify-content-between" style={{ background: '#101622' }}>
            <div class="d-xl-none d-flex">
                <div class="aiz-topbar-nav-toggler d-flex align-items-center justify-content-start mr-2 mr-md-3 text-white" data-toggle="aiz-mobile-nav">

                </div>
                <div class="">
                    <Link to="/">
                        <img src={logo} class="brand-icon" alt="Mobile Shop Admin" width="100" height={62} />
                    </Link>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-stretch flex-grow-xl-1">
                <div class="d-none d-md-flex justify-content-around align-items-center align-items-stretch">
                    <div class="d-none d-md-flex justify-content-around align-items-center align-items-stretch">
                        <div class="aiz-topbar-item">
                            <div class="d-flex align-items-center">
                                <Link class="btn btn-icon btn-circle btn-light" to="/" title="Browse Website">
                                    <i class="las la-globe"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="d-none d-md-flex justify-content-around align-items-center align-items-stretch ml-3">
                        <div class="aiz-topbar-item">
                            <div class="d-flex align-items-center">
                                <a class="btn btn-icon btn-circle btn-light" href="#" target="_blank" title="POS">
                                    <i class="las la-print"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-around align-items-center align-items-stretch">
                    <div class="aiz-topbar-item ml-2">
                        <div class="align-items-stretch d-flex dropdown">
                            <a class="dropdown-toggle no-arrow" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                                <span class="btn btn-icon p-1">
                                    <span class=" position-relative d-inline-block">
                                        <i class="las la-bell la-2x text-white"></i>
                                        <span class="badge badge-dot badge-circle badge-primary position-absolute absolute-top-right"></span>
                                    </span>
                                </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg py-0">
                                <div class="p-3 bg-light border-bottom">
                                    <h6 class="mb-0">Notifications</h6>
                                </div>
                                <ul class="list-group c-scrollbar-light overflow-auto" style={{ maxHeight: '300px' }}>
                                    <li class="list-group-item">
                                        <a href="#" class="text-reset">
                                            <span class="ml-2">1101 new orders</span>
                                        </a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#" class="text-reset">
                                            <span class="ml-2">New verification request(s)</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="aiz-topbar-item ml-2">
                        <div class="align-items-stretch d-flex dropdown">
                            <a class="dropdown-toggle no-arrow text-dark" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="false" aria-expanded="false">
                                <span class="d-flex align-items-center">
                                    <span class="avatar avatar-sm mr-md-2">
                                        <i class="las la-user-circle text-white" style={{ fontSize: '48px' }}></i>
                                    </span>
                                    <span class="d-none d-md-block">
                                        <span class="d-block fw-500">Admin</span>
                                        <span class="d-block small opacity-60">admin</span>
                                    </span>
                                </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-md">

                                <a href="#" class="dropdown-item">
                                    <i class="las la-user" style={{ fontSize: '24px' }}></i>
                                    <span>{username}</span>
                                </a>
                                <Link to="#" class="dropdown-item" onClick={logout}>
                                    <i class="las la-sign-out-alt" style={{ fontSize: '24px' }}></i>
                                    <span>Logout</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
