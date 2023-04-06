import {selectFilter} from "../../redux/filter/selectors"

describe('redux selectors', () => {
    it('should select filter from state', () => {
        const filter = []
        const result = selectFilter({filter})

        expect(result).toEqual(filter)
    })
})