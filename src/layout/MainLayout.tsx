import React from 'react'
import {Link, Outlet} from "react-router-dom"

import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs"
import {useSelector} from "react-redux"
import {selectFilter} from "../redux/filter/selectors"

import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const MainLayout = () => {
    const {name} = useSelector(selectFilter)
    const routes = [
        {
            path: '/', breadcrumb: '/ Каталог '
        },
        {
            path: 'cart', breadcrumb: ' / Корзина'
        },
        {
            path: 'card', breadcrumb: ' / '
        },
        {
            path: 'card/:barcode', breadcrumb: name
        },
        {
            path: 'adminPanel', breadcrumb: ' / Админка'
        }
    ]

    const breadcrumbs = useReactRouterBreadcrumbs(routes)

    return (
        <>
            <Header/>
            <div className="content">
                <div className='navigation'>
                    <div>
                        Главная {breadcrumbs.map(({breadcrumb, match}) => (
                        <span key={match.pathname}>{breadcrumb}</span>
                    ))}
                    </div>
                    <Link to="adminPanel">Админка</Link>
                </div>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}

export default MainLayout