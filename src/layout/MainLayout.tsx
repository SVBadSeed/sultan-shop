import React from 'react'
import {Outlet} from "react-router-dom"

import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const MainLayout = () => {
    return (
        <>
            <Header/>
            <div className="content">
                <div className='navigation'>Главная - Косметика и гигиена</div>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}

export default MainLayout