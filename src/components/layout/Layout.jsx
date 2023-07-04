// import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from "components/header/Header"

// import { nanoid } from 'nanoid';

const Layout = () => { 
    
  
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout