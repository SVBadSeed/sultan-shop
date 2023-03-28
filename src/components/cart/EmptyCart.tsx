import React from 'react'

import cart from '../../assets/images/EmptyCart.png'
import {Link} from "react-router-dom"

const EmptyCart: React.FC = () => {
    return (
        <div className='cart-empty'>
            <div className='container'>
                <h2 className='cart-empty__title'>Корзина пустая 😕</h2>
                <p className='cart-empty__text'>
                    Скорее всего, вы ничего не заказывали.<br/>
                    Для того, чтобы сделать заказ, перейдите в каталог.
                </p>
                <img className='cart-empty__image' src={cart} alt="/"/>
                <Link to="/" className="cart-empty__button">
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    )
}

export default EmptyCart