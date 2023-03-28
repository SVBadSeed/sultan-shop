export const selectFilter = (state) => state.filter

export const selectCardById = (id: string) => (state) => state.filter.items.find((item) => item.id === id)