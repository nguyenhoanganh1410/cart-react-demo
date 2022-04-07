
//actions
export const SET_CART = 'set_cart'
export const SET_COUNT = 'set_count'
export const SET_TOTAL_PRICE = 'set_total_price'
export const SET_INCREASE = 'set_increase'

export const SetCart = payload =>{
    return {
        type: SET_CART,
        payload
    }
}


export const SetCount = payload =>{
    return {
        type: SET_CART,
        payload
    }
}

export const SetIncrease = payload =>{
    return {
        type: SET_INCREASE,
        payload
    }
}