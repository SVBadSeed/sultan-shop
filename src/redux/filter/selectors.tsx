import {FilterSliceState} from "./types"

export const selectFilter = (state) => state.filter

export const selectCardById = (id: string) => (state) => state.filter.items.find((item) => item.id === id)

export const mainFilter = (state: FilterSliceState) => {
    state.itemsShow = state.items.filter(function (item) {
            let availableConditions = []
            if (state.mainFilter.categoryFilter) {
                availableConditions.push("item.typeCare.includes(state.mainFilter.categoryFilter)")
            }
            if (state.mainFilter.producersFilter.length > 0) {
                availableConditions.push("state.mainFilter.producersFilter.includes(item.producer)")
            }

            let conditionStr = availableConditions.join("&&")
            return eval(conditionStr)
        }
    )

    if (state.mainFilter.price.max) {
        state.itemsShow = state.itemsShow.filter((item) => {
            if (state.mainFilter.price.min === null) {
                return item.price <= state.mainFilter.price.max
            } else {
                return item.price <= state.mainFilter.price.max
            }
        })
    }

    if (state.mainFilter.price.min) {
        state.itemsShow = state.itemsShow.filter((item) => {
            if (state.mainFilter.price.max === null) {
                return item.price >= state.mainFilter.price.min
            } else {
                return item.price >= state.mainFilter.price.min
            }
        })
    }

    state.mainFilter.firstPage = state.mainFilter.pageSize * (state.mainFilter.currentPage - 1)
    state.mainFilter.secondPage = state.mainFilter.pageSize * state.mainFilter.currentPage

    state.mainFilter.pageCount = Math.ceil(state.itemsShow.length / state.mainFilter.pageSize)

    state.itemsShow = state.itemsShow.slice(state.mainFilter.firstPage, state.mainFilter.secondPage)
}