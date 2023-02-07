import { actionsTyoe } from "../actions/actionsType";


const initState = {
    homeData: null,
    listColection: [],
    banner: [],
    productportfolio: [],
    productview: [],
    hotproduct: [],
    shopbyinstagram: [],
    heliosmeet: [],
    categoryProduct: []
}


const homeReducer = (state = initState, action) => {
    
    switch (action.type) {
        case(actionsTyoe.GET_HOME_DATA_SUCCESS): 
        return {
            ...state,
            homeData: action.homeData,
            listColection: action.homeData.collectionName,
            categoryProduct: action.homeData.category,
            banner: action.homeData.banner,
            productportfolio: action.homeData.hslider1,
            productview: action.homeData.hslider2,
            hotproduct: action.homeData.hslider3,
            shopbyinstagram: action.homeData.hslider4,
            heliosmeet: action.homeData.hslider5,

        }
        default:
            return state;
    }
}


export default homeReducer