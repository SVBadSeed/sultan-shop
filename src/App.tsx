import React from 'react'
import {Route, Routes} from "react-router-dom"

import './scss/libs/normalize.scss'

import Catalog from "./pages/Catalog"
import MainLayout from "./layout/MainLayout"
import Cart from "./pages/Cart"
import CardProduct from "./pages/CardProduct"
import AdminPanel from "./pages/AdminPanel"
import MobileSearch from "./components/mobileAdaptive/MobileSearch"

function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route path='/' element={<Catalog/>}/>
                    <Route path='card/:barcode' element={<CardProduct/>}/>
                    <Route path='mobileSearch' element={<MobileSearch/>}/>
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='adminPanel' element={<AdminPanel/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App
