import React from 'react'
import MiddleHeader from './MiddleHeader'
import TopHeader from './TopHeader'


const Header = () => {
    return (
        <>
            <TopHeader />
            <div class="d-none d-md-block">
                <MiddleHeader />
            </div>


        </>
    )
}

export default Header