import React from 'react'

import '../assets/scss/components/_cart.scss'

import {useDispatch, useSelector} from "react-redux"
import {selectCart} from "../redux/cart/selectors"
import {clearCart} from "../redux/cart/CartSlice"

import CartItem from "../components/cart/CartItem"
import Modal from "../components/modal/Modal"
import EmptyCart from "../components/cart/EmptyCart"

const Cart: React.FC = () => {
    const dispatch = useDispatch()
    let {totalPrice, items} = useSelector(selectCart)

    const [visible, setVisible] = React.useState(false)

    const onClickCheckout = () => {
        dispatch(clearCart())
        setVisible(true)
    }

    return (
        <>
            {totalPrice === 0 ? <EmptyCart/> : <div className='cart'>
                <div className='container'>
                    <h2 className='cart-title'>Корзина</h2>
                    {items.map((item) => (
                        <CartItem key={item.id} {...item}/>
                    ))}
                    <div className='cart-bottom'>
                        <button onClick={onClickCheckout} className='cart-bottom__checkout'>Оформить заказ</button>
                        <div className='cart-bottom__total-price'>{totalPrice} ₸</div>
                    </div>
                </div>
            </div>}
            <Modal visible={visible} setVisible={setVisible}/>
        </>
    )
}

export default Cart