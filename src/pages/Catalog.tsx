import React from 'react'

import '../../assets/scss/components/_catalog.scss'

import Sort from '../sort/Sort'

import carts from '../../carts.json'

import Categories from "../categories/Categories"
import CatalogParameters from "./CatalogParameters"
import CatalogCart from "./CatalogCart"
import Pagination from "../pagination/Pagination"

const Catalog = () => {
    return (
        <div className='catalog'>
            <div className='container'>
                <div className='catalog-nav'>Главная - Косметика и гигиена</div>
                <div className='catalog-top'>
                    <h1 className='catalog-top__title'>Косметика и гигиена</h1>
                    <Sort/>
                </div>
                <Categories/>
                <div className='catalog-content'>
                    <CatalogParameters/>
                    <div className='catalog-content__wrapper'>
                        <div className='catalog-content__carts'>
                            {carts.map((cart) => <CatalogCart key={cart.id} {...cart}/>)}
                        </div>
                        <Pagination/>
                        <div className='catalog-content__description'>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam interdum ut justo,
                            vestibulum sagittis iaculis iaculis. Quis mattis vulputate <br/> feugiat massa vestibulum
                            duis.
                            Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis.
                            Nunc <br/> elit, dignissim sed nulla ullamcorper enim, malesuada.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog