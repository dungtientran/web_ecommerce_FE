import { actionsTyoe } from "./actionsType"


export const isOpenAction = (isOpen) => {
    return {
        type: actionsTyoe.OPEN_OPEN,
        isOpen: isOpen
    }
}