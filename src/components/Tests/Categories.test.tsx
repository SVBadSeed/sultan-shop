import {render} from "@testing-library/react"
import Categories from "../categories/Categories"
import * as reduxHooks from 'react-redux'

jest.mock('react-redux')

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')
describe('Categories', () => {
    it('should create Categories with id', () => {
        mockedUseSelector.mockReturnValue('')

        const component = render(<Categories/>)

        expect(component).toMatchSnapshot()
    })
    it('should create Categories with categories', () => {
        mockedUseSelector.mockReturnValue('0')

        const component = render(<Categories/>)

        expect(component).toMatchSnapshot()
    })
})