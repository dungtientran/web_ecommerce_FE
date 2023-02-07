import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
import adminReducer from "./adminReducer";
import productReducer from "./productReducer";
import homeReducer from "./homeReducer";
import { isOpenReducer } from "./isOpenReducer";

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const adminConfig = {
    ...commonConfig,
    key: 'admin',
    whitelist: ['isLogging', 'token', 'admin']
}

const rootReducer = combineReducers({
    admin: persistReducer(adminConfig, adminReducer),
    products: productReducer,
    homeData: homeReducer,
    isOpen: isOpenReducer
})

export default rootReducer