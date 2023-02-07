import { actionsTyoe } from "../actions/actionsType"

const initState = {
    admin: null,
    isLogging: false,
    msg: '',
    allAdmin: [],
    token: ''
}

const adminReducer = (state = initState, action) => {
    switch (action.type) {
        case (actionsTyoe.ADMIN_LOGIN_SUCCESS):
            return {
                ...state,
                admin: action.admin,
                token: action.token,
                msg: action.msg,
                isLogging: true
            }
        case (actionsTyoe.ADMIN_LOGOUT):
            return {
                ...state,
                admin: null,
                isLogging: false,
                token: '',
            }
        case (actionsTyoe.GET_ALL_ADMIN_SUCCES):
            return {
                ...state,
                allAdmin: action.allAdmin
            }
        default:
            return state
    }
}

export default adminReducer