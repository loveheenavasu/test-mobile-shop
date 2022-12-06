import React from 'react';
import Banner from './Banner';
import ProductGroupping from '../../components/ProductGroup';
import Footer from '../../components/Layout/Footer/index';
import BottomFooter from '../../components/Layout/Footer/BottomFooter';
import BottomSlidder from './Banner/BottomSlider';

const HomePage = () => {
    return (
        <>
            <Banner />
            <ProductGroupping />
            <BottomSlidder/>
            <div class="d-none d-lg-block">
                
                <Footer/>
                <BottomFooter/>
            </div>
            
            <div class="d-sm-none pb-3 mb-5">
                 <Footer/>
                <BottomFooter/></div>
        </>
    )
}

export default HomePage