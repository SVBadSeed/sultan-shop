import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import cards from "../../cards.json"
import {mainFilter} from "./selectors"
import {FilterSliceState, item, sortAction} from "./types"

const initialState: FilterSliceState = {
    items: [...cards],
    itemsShow: [],
    categoryId: null,
    value: '',
    sortValue: {
        title: 'Название(по возр.)',
        sortProperty: 'title'
    },
    name: '',
    id: '',
    mainFilter: {
        categoryFilter: 'УХОД ЗА ТЕЛОМ',
        producersFilter: [],
        price: {
            min: null,
            max: null
        },
        currentPage: 1,
        firstPage: 0,
        secondPage: 0,
        pageSize: 15,
        pageCount: 2
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        initItemsShow(state) {
            state.itemsShow = state.items
            state.itemsShow.sort((a, b) => a.name.localeCompare(b.name))
            mainFilter(state)
        },
        initItems(state, action) {
            state.items = [...action.payload]
        },
        setCategoryId(state, action: PayloadAction<number>) {
            if (state.items) state.categoryId = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.mainFilter.currentPage = action.payload

            mainFilter(state)
        },
        setFilterCategories(state, action: PayloadAction<string>) {
            state.sortValue = {
                title: 'Название(по возр.)',
                sortProperty: 'title'
            }

            state.mainFilter.producersFilter = []
            state.mainFilter.categoryFilter = action.payload
            mainFilter(state)
        },
        setFilterProducers(state, action: PayloadAction<string>) {
            state.mainFilter.producersFilter.push(action.payload)
            mainFilter(state)
        },
        setFilterProducersReverse(state, action: PayloadAction<string>) {
            state.mainFilter.producersFilter = state.mainFilter.producersFilter.filter((item) => (
                item !== action.payload
            ))
            mainFilter(state)
        },
        setSearchProducers(state, action: PayloadAction<string>) {
            state.value = action.payload
        },
        setMaxPrice(state, action: PayloadAction<string>) {
            state.mainFilter.price.max = Number(action.payload)
            mainFilter(state)
        },
        setMinPrice(state, action: PayloadAction<string>) {
            state.mainFilter.price.min = Number(action.payload)
            mainFilter(state)
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
            state.items.unshift(action.payload)

        },
        EditItem(state, action: PayloadAction<item>) {
            const objIndex = state.items.findIndex((obj) => obj.id === state.id)
            state.items[objIndex] = action.payload
        },
        getItemId(state, action: PayloadAction<string>) {
            state.id = action.payload
        },
        getPage(state, action) {
            state.mainFilter.pageSize = action.payload
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
    getName,
    deleteCard,
    addItem,
    EditItem,
    getItemId
} = filterSlice.actions
export default filterSlice.reducer