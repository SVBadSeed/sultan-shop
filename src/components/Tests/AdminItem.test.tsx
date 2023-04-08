import {render} from "@testing-library/react"
import * as reduxHooks from 'react-redux'
import AdminItem from "../adminPanel/AdminItem"

jest.mock('react-redux')

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')

describe('AdminItem', () => {
    it('AdminItem snapshot', () => {
        mockedUseSelector.mockReturnValue(1)

        const component = render(<AdminItem
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
            setVisibleEdit={() => {
            }}/>)

        expect(component).toMatchSnapshot()
    })
})