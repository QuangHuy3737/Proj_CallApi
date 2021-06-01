import * as Types from '../constants/ActionType';
import callApi from '../utils/apiCaller';

export const actFetchProductsRequest = () =>{
    return (dispatch) =>{
        return callApi('product', 'GET', null).then(res=>{
            dispatch(actFetchProducts(res.data));
        });
    };
}
export const actFetchProducts = (products) =>{
    return {
        type :Types.FETCH_PRODUCT,
        products
    }
}
export const actDeleteProductsRequest = (id) =>{
    return (dispatch) =>{
        return callApi(`product/${id}` ,'DELETE', null).then(res =>{
            dispatch(actDeleteProducts(id));
        })
    }
        
}
export const actDeleteProducts = (id) =>{
    return {
        type :Types.DELETE_PRODUCT,
        id
    }
}