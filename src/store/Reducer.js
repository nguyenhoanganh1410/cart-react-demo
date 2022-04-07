import { SET_CART, SET_COUNT, SET_INCREASE } from "./Actions";

const url = 'https://course-api.com/react-useReducer-cart-project'

//innite state
const initState = {
    totalProduct: 0,
    totalPrice: 0,
    cart: []
}

//depatch
const Reducer = (state, action) =>{
    switch(action.type){
        case SET_CART:
            return {
               
                totalProduct: action.payload.reduce( (sum,val) => {
                    return sum + val.amount
                }, 0),
                totalPrice: action.payload.reduce( (sum,val) => {
                    return +val.price*val.amount + sum
                }, 0),
                cart:action.payload
            }
       

    }
        
    


}

export {initState}
export default Reducer