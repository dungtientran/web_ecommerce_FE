import { actionsTyoe } from "../actions/actionsType";


const initState = {
    isOpen: false
}

export const isOpenReducer = (state = initState, action) => {
    switch (action.type) {
        case actionsTyoe.OPEN_OPEN:
            return {
                ...state,
                isOpen: action.isOpen
            }
            
    
        default:
            return state;
    }
} 