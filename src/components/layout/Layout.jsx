import { Outlet } from 'react-router-dom'

import Header from "components/header/Header"
import { Suspense } from 'react'
import Loader from 'components/loader/Loader'

const Layout = () => {   
    return (
        <>
            <div className='container'>
                <Header />
                <Suspense fallback={<div><Loader /></div>}>
                    <Outlet />
                </Suspense>
            </div>
            
            
        </>
    )
}

export default Layout