import {calcTotalPrice} from "./CalcTotalPrice"

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []
    const totalPrice = calcTotalPrice(items)

    return {
        items: items,
        totalPrice
    }
}