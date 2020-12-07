export const setProducts = (data: any) => {
    return {type: "main/SET-PRODUCTS", data} as const
}
export const totalPrice = () => {
    return {type: "basket/TOTAL-PRICE"} as const
}
export const addToBasket = (product: any) => {
    return {type: "basket/ADD-PRODUCTS-TO-BASKET", product} as const
}
export const decQuantityProducts = (id: any) => {
    return {type: "basket/DEC-QUANTITY-PRODUCTS", id} as const
}
export const incQuantityProducts = (id: string) => {
    return {type: "basket/INC-QUANTITY-PRODUCTS", id} as const
}
export const setProductsToBasket = (products: any) => {
    return {type: "basket/SET-PRODUCTS-TO-BASKET", products} as const
}
export const clearBasket = () => {
    return {type: "basket/CLEAR-BASKET"} as const
}
export const removeSingleProducts = (id: string) => {
    return {type: "basket/REMOVE-SINGLE-PRODUCTS", id} as const
}

export type BasketActionsTypes =
    ReturnType<typeof totalPrice> |
    ReturnType<typeof addToBasket> |
    ReturnType<typeof decQuantityProducts> |
    ReturnType<typeof incQuantityProducts> |
    ReturnType<typeof setProductsToBasket> |
    ReturnType<typeof clearBasket> |
    ReturnType<typeof removeSingleProducts>


export type MainActionsTypes =
    ReturnType<typeof setProducts>
