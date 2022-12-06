import React, { useState } from 'react'
import './sticky.css'
import ShippingDetails from './ShippingDetails';
import Specs from './Specs'

function Shipping({product}) {
  const [currentTab, setCurrentTab] = useState('shipping');

  const renderView = () => {
    if (currentTab === 'shipping') {
      return <ShippingDetails/>;
    }
    if (currentTab === 'specs') {
      return <Specs
      product={product} />;
    }
  }
  
  return (

    <section className="mb-4">
      <div className="container">
        <div class="bg-white shadow-sm rounded pb-3">

          <div className="nav border-0 mb-2 aiz-nav-tabs">
            <a href="#tab_default_1" data-toggle="tab" className={`py-3 px-1 float-start text-reset show active text-uppercase ${currentTab === 'shipping' ? 'sTab' : 'tTab'}`}onClick={() => setCurrentTab('shipping')}><strong>Shipping & Delivery</strong></a>
            <a href="#tab_default_1" data-toggle="tab" className={`py-3 px-1 float-end text-reset show active text-uppercase ${currentTab === 'specs' ? 'sTab' : 'tTab'}`} onClick={() => setCurrentTab('specs')}><strong>Specifications</strong></a>
          </div>
          <div className="tab-content pt-0">
            {renderView()}
          </div>
        </div>


      </div>
    </section>


  )
}

export default Shipping
