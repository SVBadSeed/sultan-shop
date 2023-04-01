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
    id: string,
    count: number
}

export type CartItemType = {
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
    id: string,
    count: number
}

export interface CartSliceState {
    items: item[],
    totalPrice: number
}