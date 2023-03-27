import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {selectFilter} from "../redux/filter/selectors"

import '../assets/scss/components/_catalog.scss'

import Sort from '../components/sort/Sort'

import Categories from "../components/categories/Categories"
import CatalogParameters from "../components/catalog/CatalogParameters"
import CatalogCard from "../components/catalog/CatalogCard"
import Pagination from "../components/pagination/Pagination"
import {initItemsShow, initSort} from "../redux/filter/FilterSlice"

const Catalog = () => {
    const dispatch = useDispatch()
    const {itemsShow} = useSelector(selectFilter)

    useEffect(() => {
        dispatch(initItemsShow())
        dispatch(initSort())
    }, [])

    return (
        <div className='catalog'>
            <div className='container'>
                <div className='catalog-top'>
                    <h1 className='catalog-top__title'>Косметика и гигиена</h1>
                    <Sort/>
                </div>
                <Categories/>
                <div className='catalog-content'>
                    <CatalogParameters/>
                    <div className='catalog-content__wrapper'>
                        <div className='catalog-content__cards'>
                            {itemsShow.map((card) => <CatalogCard key={card.id} {...card}/>)}
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