import { actionsTyoe } from "./actionsType";
import { adminLogin, getAllAdmin } from "../../api/adminLogin";


export const loginAdmin = (data) => async(dispatch) => {
    try {
        const response = await adminLogin(data)
        console.log(response);
        if(response?.data.err === 0){
            dispatch({
                type: actionsTyoe.ADMIN_LOGIN_SUCCESS,
                admin: response.data.user,
                msg: response.data.message,
                token: response.data.access_token
            })
        }else {
            dispatch({
                type: actionsTyoe.ADMIN_LOGIN_FAIL,
                admin: null,
                msg: response.data.msg
            })
        }   
    } catch (error) {
        dispatch({
            type: actionsTyoe.ADMIN_LOGIN_FAIL,
            admin: null
        })
    }
}

export const getAllAdminAction  = () => async(dispatch) => {
    try {
        const response = await getAllAdmin()
        if(response?.data.err === 0){
            dispatch({
                type: actionsTyoe.GET_ALL_ADMIN_SUCCES,
                allAdmin: response.data.data,
                token: response.data.access_token
            })
        }else {
            dispatch({
                type: actionsTyoe.GET_ALL_ADMIN_FAIL,
                allAdmin: null,
                msg: response.data.msg
            })
        }   
    } catch (error) {
        dispatch({
            type: actionsTyoe.GET_ALL_ADMIN_FAIL,
            allAdmin: null
        })
    }
}



export const logoutAdmin = () => {
    return ({
        type: actionsTyoe.ADMIN_LOGOUT
    })
}