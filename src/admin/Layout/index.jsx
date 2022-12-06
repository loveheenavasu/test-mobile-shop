import React from 'react'
import TopHeader from './TopHeader'
import SideBar from './SideBar'
import BottomMenu from './BottomMenu'

const Layout = ({ children }) => {
    return (
        <div class="aiz-main-wrapper">
            <SideBar />
            <div class="aiz-content-wrapper">
                <TopHeader />
                <div class="aiz-main-content">
                    <div class="px-15px px-lg-25px">
                        {children}
                    </div>
                    <div class="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                        <p class="mb-0">© Mobile Shop Admin Panel v1.0</p>
                    </div>
                    <BottomMenu />
                </div>
            </div>
        </div>
    )
}

export default Layout
