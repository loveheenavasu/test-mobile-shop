import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.webp'

const SideBar = () => {
    return (
        <div class="aiz-sidebar left c-scrollbar">
            <div class="pl-2">
                <Link to="/" class="d-block text-left">
                    <img class="" src={logo} alt="Mobile Shop Admin" width="130" height={92} />
                </Link>
            </div>
            <div class="aiz-side-nav-wrap">
                <div class="px-20px mb-3">
                    <input class="form-control bg-soft-secondary border-0 form-control-sm text-white" type="text" name="" placeholder="Search in menu" id="menu-search" onkeyup="menuSearch()" />
                </div>
                <ul class="aiz-side-nav-list" id="search-menu">
                </ul>
                <ul class="aiz-side-nav-list metismenu" id="main-menu" data-toggle="aiz-side-menu">
                    <li class="aiz-side-nav-item mm-active">
                        <Link to="/admin/dashboard" class="aiz-side-nav-link active" aria-expanded="true">
                            <i class="las la-home aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Dashboard</span>
                        </Link>
                    </li>

                    <li class="aiz-side-nav-item">
                        <Link to="/admin/listproduct" class="aiz-side-nav-link ">
                            <i class="las la-shopping-cart aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">All Products</span>
                        </Link>
                    </li>

                    <li class="aiz-side-nav-item">
                        <Link to="/admin/listaccessories" class="aiz-side-nav-link ">
                            <i class="las la-shopping-cart aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">All Accessories</span>
                        </Link>
                    </li>

                    <li class="aiz-side-nav-item">
                        <Link to="/admin/listorders" class="aiz-side-nav-link ">
                            <i class="las la-money-bill aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">All Orders</span>
                        </Link>
                    </li>

                    <li class="aiz-side-nav-item">
                        <Link to="/admin/preorders" class="aiz-side-nav-link ">
                            <i class="las la-money-bill aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Pre Orders</span>
                        </Link>
                    </li>

                    <li class="aiz-side-nav-item">
                        <Link to="/admin/categories" class="aiz-side-nav-link ">
                            <i class="las la-folder-open aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Categories</span>
                        </Link>
                    </li>

                    <li class="aiz-side-nav-item">
                        <Link to="/admin/brands" class="aiz-side-nav-link ">
                            <i class="las la-wrench aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Brands</span>
                        </Link>
                    </li>
                    <li class="aiz-side-nav-item">
                        <Link to="/admin/customers" class="aiz-side-nav-link ">
                            <i class="las la-user-friends aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Customers</span>
                        </Link>
                    </li>
                    <li class="aiz-side-nav-item">
                        <Link to="/admin/listStaff" class="aiz-side-nav-link ">
                            <i class="las la-user-friends aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Staff Users</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
