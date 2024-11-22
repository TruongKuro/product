import { FAIL_REQUEST, MAKE_REQUEST, GET_PRODUCTS, GET_PRODUCTS_BY_ID } from "./ActionType"

const initialstate = {
    loading: true,
    productList: [],
    productobj: {},
    errmessage: ''
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_PRODUCTS:
            return {
                loading: false,
                errmessage: '',
                productList:action.payload,
                productobj:{}
            }
        case GET_PRODUCTS_BY_ID:return{
            ...state,
            loading:false,
            productobj:action.payload
        }
        default: return state
    }
}