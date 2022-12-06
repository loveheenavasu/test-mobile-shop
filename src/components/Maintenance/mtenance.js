import React from 'react'
import './mtenance.css'

function Maintenance() {
    return (
        <section className="maintenace pb-5 mb-5">
       
            <div class="container">
                <div class="box">
                    <div class="animation">
                        <div class="one spin-one"></div>
                        <div class="two spin-two"></div>
                        <div class="three spin-one"></div>
                    </div>
                    <h1>Notice of Server Maintenance</h1>
                    <p>Valued patrons,<br></br>
                        Kindly note that we are expereincing server downtime due to scheduled maintenance for 48 hours.
                    </p>
                    <p>During this time, Mobileshop.ug website will be unavailable.</p>
                    <p> Please accept our apologies for any inconviniences caused.</p>
                    <p>Kind regards, <br></br>Mobileshop Uganda Limited</p>
                    <p> For all orders and inquires, contact <a href="tel:0709744874">+256709744874</a></p>
                </div>
            </div>
        </section>
    )
}

export default Maintenance
