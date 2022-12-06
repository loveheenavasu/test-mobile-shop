/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Header from "./Header";
import BottomMenu from "./MobileMenu/BottomMenu";
import MobileHeader from './MobileMenu/MobileHeader';
import MobileDrawer from './MobileMenu/MobileDrawer';
import Maintenance from "../Maintenance/mtenance";

const Layout = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [rotate, setRotate] = useState(false);
  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);

  const toTop = () => {
    window.scrollTo(0, 0)
  };
  const rotateIcon = () => {
    setRotate(!rotate)
  }

  return (
    <div className="aiz-main-wrapper d-flex flex-column">
      <Header open={openDrawer} />
      <MobileHeader open={openDrawer} />
      {children}
      {showDrawer && (<MobileDrawer close={closeDrawer} />)}
      {/* <Maintenance/> */}
      
      {/* <div class="mainopShadow"></div>
      <div class="fab">
        <div class="mainop">
          <i className={rotate ? "las la-plus la-3x fabIcon" : "las la-plus la-3x"} onClick={rotateIcon}></i>  </div>
          {
            rotate &&
          
        <div className="fab-menu">
          <div id="drawings" class="minifab op4 text-center">
            <i class="las la-arrow-up la-2x text-white text-center"></i>
            <div class="label-text">Go to Top</div> </div>
          <div id=" position-relative slides" class="minifab op3 text-center">
            <i class="las la-mobile-alt la-2x text-white text-center"></i>
            <div class="label-text">Smartphones</div>
          </div>

          <div id="sheets" class="minifab op2">

            <i class="las la-laptop la-2x text-white text-center"></i>
            <div class="label-text">Laptops</div> </div>
          <div id="docs" class="minifab op1">

            <i class="las la-phone la-2x text-white text-center"></i>
            <div class="label-text">Call us</div>
          </div>
        </div>
}
      </div> */}

      <BottomMenu open={openDrawer} />
    </div>
  )
};

export default Layout;
