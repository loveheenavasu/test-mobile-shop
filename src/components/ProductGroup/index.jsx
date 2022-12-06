/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect  } from 'react'
import { getAllProducts } from "../../functions/products";

import Systems from './systems';
import Phones from './phones';
import Tablet from './tablet'
import Accessories from './accessories';
import Televisions from './televisons';
import Fridges from './fridges';
import Gaming from './gaming';
import Laptop from './laptops';

import './styles.css';

const ProductGroup = () => {
  const [currentTab, setCurrentTab] = useState('phones');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const divstyles = {
    fontSize: "13px"
  }

  const divstyle = {
    display: "flex",
    justifyContent: "center",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    overflow: "hidden"
  }
  const imagestyle = {
    maxWidth: "80%",
    maxHeight: "80%",
    margin: "auto",
    display: "block",
  }

  const fetchAllProducts = () => {
    setLoading(true);
    getAllProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);



  const renderView = () => {
    if (currentTab === 'systems') {
      return <Systems products={products} loading={loading} />;
    }
    if (currentTab === 'phones') {
      return <Phones />;
    }
    if (currentTab === 'accessories') {
      return <Accessories products={products} loading={loading} />;
    }
    if (currentTab === 'televisions') {
      return <Televisions products={products} loading={loading} />;
    }
    if (currentTab === 'laptops') {
      return <Laptop products={products} loading={loading} />;
    }
    if (currentTab === 'fridges') {
      return <Fridges products={products} loading={loading} />;
    }
    if (currentTab === 'gaming') {
      return <Gaming products={products} loading={loading} />;
    }
    if (currentTab === 'tablet') {
      return <Tablet products={products} loading={loading} />;
    }

  };

  return (

    <section className=" mb-0" >
      <div className=" container">
          <div className="d-md-none shadow p-3 pb-0 bg-white rounded">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="row">
                <div className=" col-3 col-md-3 col-lg-3 text-center" onClick={() => setCurrentTab('phones')} >
                  <div className="border" style={divstyle}>
                    <img src="images/phones.webp"
                      alt="sccesories" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'phones' ? 'selected' : 'tab-text'} style={divstyles}>Phones</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('televisions')}>
                  <div className="border" style={divstyle}>
                    <img src="images/tvs.webp" alt="Televison" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'televisions' ? 'selected' : 'tab-text'} style={divstyles}>Televisions</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('fridges')}>
                  <div className="border" style={divstyle}>
                    <img src="images/fridges.webp"
                      alt="Fridge" width="50" height="50" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'fridges' ? 'selected' : 'tab-text'} style={divstyles} >Fridges</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('accessories')}>
                  <div className="border" style={divstyle}>
                    <img src="images/pods.webp" alt="sccesories" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'accessories' ? 'selected' : 'tab-text'} style={divstyles}>Accessories</a>
                </div>


              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-6" >
              <div className="row">
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('laptops')} >
                  <div className="border" style={divstyle}>
                    <img src="images/mac.webp" alt="Laptop" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'laptops' ? 'selected' : 'tab-text'} style={divstyles}>Laptops</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('systems')}>
                  <div className="border" style={divstyle}>
                    <img src="images/speakers.webp" alt="Laptop" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'systems' ? 'selected' : 'tab-text'} style={divstyles}>Speakers</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('tablet')}>
                  <div className="border" style={divstyle}>
                    <img src="images/tablets.webp" alt="Tablet" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'tablet' ? 'selected' : 'tab-text'} style={divstyles}>Tablets</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('gaming')}  >
                  <div className="border" style={divstyle}>
                    <img src="images/gaming.webp" alt="Gaming" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'gaming' ? 'selected' : 'tab-text'} style={divstyles}>Gaming</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* desktop view */}
      <div className=" d-none d-lg-block container">
      <div class="shadow-sm bg-white p-2 rounded">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6" >
              <div className="row">
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('phones')} >
                  <div className="border" style={divstyle}>
                    <img src="images/phones.webp"
                      alt="sccesories" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'phones' ? 'selected' : 'tab-text'} style={divstyles}>Phones</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('televisions')}>
                  <div className="border" style={divstyle}>
                    <img src="images/tvs.webp" alt="Televison" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'televisions' ? 'selected' : 'tab-text'} style={divstyles}>Televisions</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('fridges')}>
                  <div className="border" style={divstyle}>
                    <img src="images/fridges.webp"
                      alt="Fridge" width="50" height="50" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'fridges' ? 'selected' : 'tab-text'} style={divstyles} >Fridges</a>
                </div>
                <div className=" col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('accessories')}>
                  <div className="border" style={divstyle}>
                    <img src="images/pods.webp" alt="sccesories" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'accessories' ? 'selected' : 'tab-text'} style={divstyles}>Accessories</a>
                </div>


              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-6" >
              <div className="row">
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('laptops')} >
                  <div className="border" style={divstyle}>
                    <img src="images/mac.webp" alt="Laptop" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'laptops' ? 'selected' : 'tab-text'} style={divstyles}>Laptops</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('systems')}>
                  <div className="border" style={divstyle}>
                    <img src="images/speakers.webp" alt="Laptop" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'systems' ? 'selected' : 'tab-text'} style={divstyles}>Speakers</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('tablet')}>
                  <div className="border" style={divstyle}>
                    <img src="images/tablets.webp" alt="Tablet" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'tablet' ? 'selected' : 'tab-text'} style={divstyles}>Tablets</a>
                </div>
                <div className="col-3 col-md-3 col-lg-3" onClick={() => setCurrentTab('gaming')}  >
                  <div className="border" style={divstyle}>
                    <img src="images/gaming.webp" alt="Gaming" style={imagestyle} />
                  </div>
                  <a href="#" className={currentTab === 'gaming' ? 'selected' : 'tab-text'} style={divstyles}>Gaming</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* desktop view */}

      
      <div className="my-3 rounded categories-container container">
        {renderView()}
      </div>
    </section>
  )
}

export default ProductGroup;
