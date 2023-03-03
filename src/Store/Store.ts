import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "../Reducers/counter-reducer";
import {loadState, saveState} from "../utilits";


const rootReducer = combineReducers({
    count: countReducer
})

export type StoreType = ReturnType<typeof rootReducer>
const persistedState = loadState();
export const store = legacy_createStore(rootReducer, persistedState)

store.subscribe(() => {
    saveState({
        count: store.getState().count
    });
});

//разобрать что что написано выше обязательно!!!

