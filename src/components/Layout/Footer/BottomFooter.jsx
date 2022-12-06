import React from 'react';
import { Link } from 'react-router-dom'

const BottomFooter = () => (
  <footer className="pt-3 pb-3 text-light" style={{backgroundColor: '#131821'}}>
    <div className="container">
      <div className="row align-items-center">
      <div className="col-lg-4">
          <ul className="list-inline my-3 my-md-0 social colored text-center">
            <li className="list-inline-item">
              <a href="https://fb.me/mobileshop.ug" target="_blank" className="facebook"><i className="lab la-facebook-f" /></a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/mobileshopug?s=09" target="_blank" className="twitter"><i className="lab la-twitter" /></a>
            </li>
            <li className="list-inline-item">
              <a href="https://instagram.com/mobileshop.ug?igshid=1aj8702pmna3c" target="_blank" className="instagram"><i className="lab la-instagram" /></a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-4">
          <div className="text-md-left">
            <span>Find us @ </span>
            Kampala Road, City Plaza opposite City Square, Tel <a href="tel:0709744874" style={{color:"#f90"}}>+256709744874</a> ( available 24/7 online )
            <br />  
            Basement 08 , PO Box 100735 Kampala, Uganda          
          </div>
        </div>
        <div className="col-12 col-lg-4 pt-3">
          <ul class="breadcrumb bg-transparent p-0">
              <li class="breadcrumb-item">
              <Link to="/aboutus">About us</Link>
              </li>
              <li class="breadcrumb-item">
              <Link to="/faqs">FAQs</Link>
              </li>
              <li class="breadcrumb-item">
              <Link to="/faqs">Return Policy</Link>
              </li>
              <li class="breadcrumb-item">
              <Link to="/terms">Terms and Conditions</Link>
              </li>
              <li class="breadcrumb-item">
              <Link to="">Become an affiliate</Link>
              </li>
              <li class="breadcrumb-item">
              <Link to="">Customer Reviews</Link>
              </li>
              <li class="breadcrumb-item">
              <Link to="/warranty">Warranty and Return Policy</Link>
              </li>
              <li class="breadcrumb-item">
              <Link to="/login/staff">Admin</Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    )

export default BottomFooter
