import { actionsTyoe } from "./actionsType";
import * as products from '../../api/products'


export const getAllProduct = () =>async (dispatch) => {
    try {
        const response = await products.apiGetAllProducts()
      
        if(response.data.err === 0) {
          
            dispatch({
                type: actionsTyoe.GET_ALL_PRODUCT_SUCCES,
                allProducts: response.data.data
            })
            
        }else{
            dispatch({
                type: actionsTyoe.GET_ALL_PRODUCT_FAIL,
                allProducts: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionsTyoe.GET_ALL_PRODUCT_FAIL,
            allProducts: null
        })
    }
}
export const createProduct = (data) =>async (dispatch) => {
    try {
        const response = await products.apiCreateProduct(data)
        if(response.data.err === 0) {
            dispatch({
                type: actionsTyoe.CREATE_PRODUCT_SUCCESS,
            })
            
        }else{
            dispatch({
                type: actionsTyoe.CREATE_PRODUCT_FAIL,
            })
        }
    } catch (error) {
        dispatch({
            type: actionsTyoe.CREATE_PRODUCT_FAIL,
        })
    }
}
export const getCollectionAction = (data) =>async (dispatch) => {
    try {
        const response = await products.apiGetCollection(data)
        if(response.data.err === 0) {
            dispatch({
                type: actionsTyoe.GET_COLLECTION_SUCCESS,
                collectionProduct: response.data.data
            })
            
        }else{
            dispatch({
                type: actionsTyoe.CREATE_PRODUCT_FAIL,
                collectionProduct: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionsTyoe.CREATE_PRODUCT_FAIL,
            collectionProduct: null
        })
    }
}
export const getDetailsAction = (id) =>async (dispatch) => {
    try {
        const response = await products.apiGetDetailsProduct(id)
        if(response.data.err === 0) {
            dispatch({
                type: actionsTyoe.GET_DETAILS_SUCCESS,
                detailsProduct: response.data.data
            })
            
        }else{
            dispatch({
                type: actionsTyoe.GET_DETAILS_FAIL,
                detailsProduct: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionsTyoe.GET_DETAILS_FAIL,
            detailsProduct: null
        })
    }
}
export const addCartAction = (product) => {
    return {
        type: actionsTyoe.PRODUCT_CART,
        product: product
    }
}
export const searchTextAction = (text) => {
    return {
        type: actionsTyoe.SEARCH_TEXT,
        searchText: text
    }
}