import FilterSlice from '../../redux/filter/FilterSlice'

describe('FilterSlice', () => {
    it('should return default state wnen passed an empty action', () => {
        const result = FilterSlice(undefined, {type: ''})

        expect(result).toEqual({
                "categoryId": null,
                "id": "",
                "items": [],
                "itemsShow": [],
                "mainFilter": {
                    "categoryFilter": "УХОД ЗА ТЕЛОМ",
                    "currentPage": 1,
                    "firstPage": 0,
                    "pageCount": 2,
                    "pageSize": 15,
                    "price": {"max": null, "min": null},
                    "producersFilter": [],
                    "secondPage": 0
                },
                "name": "",
                "sortValue": {"sortProperty": "title", "title": "Название(по возр.)"},
                "value": ""
            }
        )
    })
})