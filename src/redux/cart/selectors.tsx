export const selectCart = (state) => state.cart
export const selectCartItemById = (id: string) => (state) => state.cart.items.find((item) => item.id === id)