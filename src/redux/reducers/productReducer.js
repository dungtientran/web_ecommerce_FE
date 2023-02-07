import { actionsTyoe } from "../actions/actionsType"

const initState = {
    allProducts: [],
    collectionProduct: [],
    categoryProduct: [],
    detailsProduct: [],
    isGetDetails: false,
    listImgDetails: [],
    listCart: [],
    searchText: ''
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case (actionsTyoe.GET_ALL_PRODUCT_SUCCES):
            return {
                ...state,
                allProducts: action.allProducts,
            }
        case (actionsTyoe.CREATE_PRODUCT_SUCCESS):
            return {
                ...state,
            }
        case (actionsTyoe.GET_COLLECTION_SUCCESS):
            return {
                ...state,
                collectionProduct: action.collectionProduct
            }
        case (actionsTyoe.GET_DETAILS_SUCCESS): {
            return {
                ...state,
                detailsProduct: action.detailsProduct,
                isGetDetails: true
            }
        }
        case (actionsTyoe.GET_CATEGORY_SUCCSESS):
            return {
                ...state,
                collectionProduct: action.categoryProduct,
                listImgDetails: JSON.parse(action.categoryProduct.image)
            }
        case (actionsTyoe.PRODUCT_CART):

            if(state.listCart.length > 0) {
                state.listCart.forEach(item => {
                    if(item.name === action.product.name){
                        (item.amountBuy) += Number(action.product.amountBuy)
                    }
                })
                const check = state.listCart.find(item => item.name === action.product.name)
                if(!check) {
                    state.listCart.push(action.product)
                }
            }else{
                state.listCart.push(action.product)

            }
            return {
                ...state
            }
        case (actionsTyoe.SEARCH_TEXT) : 
        return {
            ...state,
            searchText: action.searchText
        }
        default:
            return state
    }
}

export default productReducer