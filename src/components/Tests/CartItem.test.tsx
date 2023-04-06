import * as reduxHooks from 'react-redux'
import {render} from "@testing-library/react"
import CartItem from "../cart/CartItem"

jest.mock('react-redux')

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
describe('CatalogItem', () => {
    it('should create CartItem', () => {
        // @ts-ignore
        mockedDispatch.mockResolvedValue(jest.fn())

        const component = render(<CartItem
            imageUrl='https://sun9-19.userapi.com/impg/2PPRq_DqAos6wV6irSDxgUNzSCz-QaMLN2F30w/d9AlL4fl_eU.jpg?size=213x320&quality=95&sign=917a56004a0253a74d9f63bce0b055be&type=album'
            name='ADIDAS'
            type='мл'
            size={250}
            barcode={4604049097549}
            producer='Adidas'
            brand='ADIDAS'
            description='Купить Гель для душа 250 мл Adidas Уход за телом'
            price={48}
            typeCare={["УХОД ЗА ТЕЛОМ"]}
            id='0'
            count={0}/>)

        expect(component).toMatchSnapshot()
    })
})