import React from 'react'
import {Route, Routes} from "react-router-dom"

import './normalize.scss'

import Catalog from "./pages/Catalog"
import MainLayout from "./layout/MainLayout"
import Cart from "./pages/Cart"
import CardProduct from "./components/cardProduct/CardProduct"

function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route path='' element={<Catalog/>}/>
                    <Route path='card/:barcode' element={<CardProduct/>}/>
                    <Route path='cart' element={<Cart/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App
