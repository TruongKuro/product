import axios from "axios"
import { FAIL_REQUEST, MAKE_REQUEST, GET_PRODUCTS, GET_PRODUCTS_BY_ID } from "./ActionType"

export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const getProductList=(data)=>{
    return{
        type:GET_PRODUCTS,
        payload:data
    }
}

export const getUserObj=(data)=>{
    return{
        type:GET_PRODUCTS_BY_ID,
        payload:data
    }
}

export const FetchAllProduct=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());

        axios.get('https://dummyjson.com/products').then(res=>{
            const productlist=res.data;
            dispatch(getProductList(productlist));
 
          }).catch(err=>{
            dispatch(failRequest(err.message))
    
          })    
    }
}



export const FetchProductById=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.get('https://dummyjson.com/products/'+code).then(res=>{
            const productlist=res.data;
            dispatch(getProductList(productlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     
    }
}