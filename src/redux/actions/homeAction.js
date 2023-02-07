import { getHome } from "../../api/home";
import { actionsTyoe } from "./actionsType";


export const getHomeData = () => async(dispatch) => {
    try {
        const response = await getHome();
        if(response.data.err === 0) {
            dispatch({
                type: actionsTyoe.GET_HOME_DATA_SUCCESS,
                homeData: response.data.data[0]
            })
        }else{
           
            dispatch({
                type: actionsTyoe.GET_HOME_FAIL,
                homeData: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionsTyoe.GET_HOME_FAIL,
            homeData: null
        })
    }
}