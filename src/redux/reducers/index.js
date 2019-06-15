import { combineReducers } from "../../../../../.cache/typescript/2.8/node_modules/redux";
import { itemReducer } from "./itemReducer";

export const rootReducer = combineReducers({
    items: itemReducer
})