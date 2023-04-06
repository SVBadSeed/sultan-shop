import cartSlice, {
    addItem
} from "../../redux/cart/CartSlice"
import {getCartFromLS} from "../utils/GetCartFromLC"
import {deleteCard} from "../../redux/filter/FilterSlice"

const {totalPrice} = getCartFromLS()
const cartState = {items: [], totalPrice: totalPrice}
describe('cartSlice', () => {
    it('should return default state', () => {
        const result = cartSlice(undefined, {type: ''})

        expect(result).toEqual(cartState)
    })

    it('should add new card with "addItem" action', () => {
        const action = {
            type: addItem.type,
            payload: {
                imageUrl: "https://sun9-19.userapi.com/impg/2PPRq_DqAos6wV6irSDxgUNzSCz-QaMLN2F30w/d9AlL4fl_eU.jpg?size=213x320&quality=95&sign=917a56004a0253a74d9f63bce0b055be&type=album",
                barcode: 4604049097549,
                brand: "ADIDAS",
                count: 0,
                description: "Купить Гель для душа 250 мл Adidas Уход за телом",
                id: "0",
                name: "ADIDAS",
                price: 48,
                producer: "Adidas",
                size: 250,
                type: "мл",
                typeCare: ["УХОД ЗА ТЕЛОМ"]
            }
        }

        const result = cartSlice(cartState, action)

        expect(result.items[0].barcode).toBe(4604049097549)
    })

    it('should delete card with "removeItem" action', () => {
        const obj = {
            imageUrl: "https://sun9-19.userapi.com/impg/2PPRq_DqAos6wV6irSDxgUNzSCz-QaMLN2F30w/d9AlL4fl_eU.jpg?size=213x320&quality=95&sign=917a56004a0253a74d9f63bce0b055be&type=album",
            barcode: 4604049097549,
            brand: "ADIDAS",
            count: 0,
            description: "Купить Гель для душа 250 мл Adidas Уход за телом",
            id: "0",
            name: "ADIDAS",
            price: 48,
            producer: "Adidas",
            size: 250,
            type: "мл",
            typeCare: ["УХОД ЗА ТЕЛОМ"]
        }

        const action = {
            type: deleteCard.type,
            payload: "0"
        }

        // @ts-ignore
        const result = cartSlice(obj, action)

        expect(result).toEqual({
            imageUrl: "https://sun9-19.userapi.com/impg/2PPRq_DqAos6wV6irSDxgUNzSCz-QaMLN2F30w/d9AlL4fl_eU.jpg?size=213x320&quality=95&sign=917a56004a0253a74d9f63bce0b055be&type=album",
            barcode: 4604049097549,
            brand: "ADIDAS",
            count: 0,
            description: "Купить Гель для душа 250 мл Adidas Уход за телом",
            id: "0",
            name: "ADIDAS",
            price: 48,
            producer: "Adidas",
            size: 250,
            type: "мл",
            typeCare: ["УХОД ЗА ТЕЛОМ"]
        })
    })
})