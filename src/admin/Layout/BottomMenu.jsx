import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const BottomMenu = () => {

  return(
  <div className="d-block d-lg-none bottom__menu">
      <div className="navigation--list">
        <div className="navigation__content">
          <Link to="/admin/dashboard" className="navigation__item ">
          <i className="las la-home la-2x" />
            <span style={{ color: '#bbb' }}> DashBoard</span>
          </Link>

          <Link to="/admin/listproduct" className="navigation__item">
          <i className="las la-folder-open la-2x" />
            <span style={{ color: '#bbb' }}> Products</span>
          </Link>

          <Link className="navigation__item call-item" to="/admin/listorders">
              <i className="las la-money-bill la-2x"></i>
            <span style={{ color: '#bbb' }}> Orders</span>
          </Link>

          <Link to="/admin/customers" className="navigation__item">
              <i className="las la-user-friends la-2x" />
                <span style={{ color: '#bbb' }}>Customers</span>
          </Link>

        </div>
      </div>
    </div>
    )};

export default BottomMenu
