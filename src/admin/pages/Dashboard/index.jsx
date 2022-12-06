import React from 'react'
import Cards from './Cards'

const Dashboard = () => {
    return (
        <>
        <div class="">
                <div class="alert alert-danger d-flex align-items-center">
                   Welcome to Mobile Shop Admin Panel where you configure products for mobile shop.
                   <a class="alert-link ml-2" href="">Happy Hacking!!</a>
                </div>
             </div>
             <Cards />

             </>
    )
}

export default Dashboard
