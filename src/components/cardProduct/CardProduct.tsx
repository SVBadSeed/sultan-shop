import React from 'react'

import '../../assets/scss/components/cardsProduct'

import {useLocation} from "react-router-dom"

const CardsProduct: React.FC = () => {
    let {state} = useLocation()

    console.log(state)
    return (
        <div className='card-product'>
            <div className='container'>
                <img className='card-product__image' src={state.imageUrl} alt="/"/>
            </div>
        </div>
    )
}

export default CardsProduct