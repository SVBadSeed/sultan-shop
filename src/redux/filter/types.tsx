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
    items: item[],
    itemsShow: item[],
    value: string,
    sortValue: {
        title: string,
        sortProperty: string
    },
    name: string,
    id: string,
    mainFilter: {
        categoryFilter: string,
        producersFilter: string[],
        price: {
            min: number,
            max: number
        },
        pageSize: number,
        pageCount: number,
        firstPage: number,
        secondPage: number,
        currentPage: number,
    }
}