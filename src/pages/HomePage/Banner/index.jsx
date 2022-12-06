import React from 'react'
import BannerSlidder from './BannerSlidder'
import Drawer from './drawer'
import './style.css'

const Banner = () => {
    return (
        <div class="home-banner-area mb-2 pt-3">
            <div class="container">
                <div class="row gutters-10 position-relative">
                    <div class="col-lg-3 position-static d-none d-lg-block">
                        <Drawer/>
                   
                    </div>
                    <div class=" col-lg-9 ">
                        <div class="mobile-img-auto-height">
                            <BannerSlidder />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner