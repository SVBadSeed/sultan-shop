import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import cards from "../../cards.json"

export type item = {
    imageUrl: string,
    name: string,
    type: string,
    size: number,
    barcode: number,
    producer: string,
    brand: string,
    description: string,
    price: number,
    typeCare: string[],
    id: string
}

export type sortAction = {
    title: string,
    sortProperty: string
}

export interface FilterSliceState {
    categoryId: number,
    currentPage: number,
    items: item[],
    itemsShow: item[],
    value: string,
    producersFilter: string[],
    categoryFilter: string,
    price: {
        min: number,
        max: number
    },
    sortValue: {
        title: string,
        sortProperty: string
    },
    placeholder: {
        min: number,
        max: number
    },
    name: string,
    id: string
}

const initialState: FilterSliceState = {
    items: [...cards],
    itemsShow: [],
    producersFilter: [],
    categoryId: 0,
    currentPage: 1,
    value: '',
    sortValue: {
        title: 'Название(по возр.)',
        sortProperty: 'title'
    },
    placeholder: {
        min: 0,
        max: 10000
    },
    price: {
        min: null,
        max: null
    },
    categoryFilter: 'УХОД ЗА ТЕЛОМ',
    name: '',
    id: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        initItemsShow(state) {
            state.itemsShow = state.items
            state.itemsShow = state.items.filter((item) => (
                item.typeCare.includes(state.categoryFilter)
            ))
        }, initItems(state, action) {
            state.items = [...action.payload]
        },
        initSort(state) {
            if (state.sortValue.sortProperty === 'title') {
                state.itemsShow.sort((a, b) => a.name.localeCompare(b.name))
            }
        },
        setCategoryId(state, action: PayloadAction<number>) {
            if (state.items) state.categoryId = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setFilterCategories(state, action: PayloadAction<string>) {
            state.sortValue = {
                title: 'Название(по возр.)',
                sortProperty: 'title'
            }
            state.producersFilter = []
            state.categoryFilter = action.payload

            state.itemsShow = state.items.filter((item) =>
                item.typeCare[0] === action.payload || item.typeCare[1] === action.payload)
        },
        setFilterProducers(state, action: PayloadAction<string>) {
            state.producersFilter.push(action.payload)

            state.itemsShow = state.items.filter((item) => (
                state.producersFilter.includes(item.producer) &&
                item.typeCare.includes(state.categoryFilter)
            ))
        },
        setFilterProducersReverse(state, action: PayloadAction<string>) {
            state.producersFilter = state.producersFilter.filter((item) => (
                item !== action.payload
            ))

            state.itemsShow = state.items.filter((item) => (
                (state.producersFilter.length > 0) ?
                    state.producersFilter.includes(item.producer) &&
                    item.typeCare.includes(state.categoryFilter) :
                    item.typeCare.includes(state.categoryFilter)
            ))
        },
        setSearchProducers(state, action: PayloadAction<string>) {
            state.value = action.payload
        },
        setMaxPrice(state, action: PayloadAction<string>) {
            state.price.max = Number(action.payload)

            state.itemsShow = state.items.filter((item) => {
                if (state.price.min === null) {
                    return item.price <= state.price.max && item.typeCare.includes(state.categoryFilter)
                } else {
                    return item.price <= state.price.max && item.price >= state.price.min && item.typeCare.includes(state.categoryFilter)
                }
            })
        },
        setMinPrice(state, action: PayloadAction<string>) {
            state.price.min = Number(action.payload)

            state.itemsShow = state.items.filter((item) => {
                if (state.price.max === null) {
                    return item.price >= state.price.min && item.typeCare.includes(state.categoryFilter)
                } else {
                    return item.price >= state.price.min && item.price <= state.price.max && item.typeCare.includes(state.categoryFilter)
                }
            })
        },
        setFilterSort(state, action: PayloadAction<sortAction>) {
            state.sortValue = action.payload

            if (state.sortValue.sortProperty === 'title') {
                state.itemsShow.sort((a, b) => a.name.localeCompare(b.name))
            } else if (state.sortValue.sortProperty === '-title') {
                state.itemsShow.sort((a, b) => b.name.localeCompare(a.name))
            }

            if (state.sortValue.sortProperty === 'price') {
                state.itemsShow.sort((a, b) => a.price - b.price)
            } else if (state.sortValue.sortProperty === '-price') {
                state.itemsShow.sort((a, b) => b.price - a.price)
            }
        },
        getName(state, action: PayloadAction<string>) {
            state.name = action.payload
        },
        deleteCard(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        addItem(state, action: PayloadAction<item>) {
            state.items.push(action.payload)

        },
        EditItem(state, action: PayloadAction<item>) {
            const objIndex = state.items.findIndex((obj) => obj.id === state.id)
            state.items[objIndex] = action.payload
        },
        getItemId(state, action: PayloadAction<string>) {
            state.id = action.payload
        }
    }
})

export const {
    setCategoryId,
    setCurrentPage,
    setFilterCategories,
    setSearchProducers,
    setFilterProducers,
    setFilterProducersReverse,
    initItemsShow,
    initItems,
    setMaxPrice,
    setMinPrice,
    setFilterSort,
    initSort,
    getName,
    deleteCard,
    addItem,
    EditItem,
    getItemId
} = filterSlice.actions
export default filterSlice.reducer