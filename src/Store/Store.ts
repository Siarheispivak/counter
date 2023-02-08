import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "../Reducers/counter-reducer";


const rootReducer = combineReducers({
    count:countReducer
})

export type StoreType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer)

