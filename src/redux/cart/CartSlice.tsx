import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {getCartFromLS} from "../../components/utils/GetCartFromLC"
import {calcTotalPrice} from "../../components/utils/CalcTotalPrice"
import {CartItemType, CartSliceState} from "./types"

const {totalPrice} = getCartFromLS()

const initialState: CartSliceState = {
    items: [],
    totalPrice: totalPrice
}

export const CartSlice = createSlice({
        name: 'cart',
        initialState,
        reducers: {
            addItem(state, action: PayloadAction<CartItemType>) {
                const findItem = state.items.find((item) => item.id === action.payload.id)

                if (findItem) {
                    findItem.count++
                } else {
                    state.items.push({
                        ...action.payload,
                        count: 1
                    })
                }

                state.totalPrice = state.items.reduce((sum, obj) => {
                    return (obj.price * obj.count) + sum
                }, 0)
            },
            removeItem(state, action) {
                state.items = state.items.filter(item => item.id !== action.payload)

                state.totalPrice = state.items.reduce((sum, obj) => {
                    return (obj.price * obj.count) + sum
                }, 0)
            },
            itemMinus(state, action) {
                const findItem = state.items.find(item => item.id === action.payload)

                if (findItem) {
                    findItem.count--
                }

                state.totalPrice = calcTotalPrice(state.items)
            },
            clearCart(state) {
                state.items = []
                state.totalPrice = 0
            }
        }
    }
)

export const {addItem, removeItem, itemMinus, clearCart} = CartSlice.actions

export default CartSlice.reducer