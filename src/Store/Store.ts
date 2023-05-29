import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {countReducer} from "../Reducers/counter-reducer";
import {loadState, saveState} from "../utilits";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


const rootReducer = combineReducers({
    counter: countReducer
})


type ThunkDispatchType = ThunkDispatch<AppStateType,any,AnyAction>
export const useAppDispatch = () => useDispatch<ThunkDispatchType>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export const store = legacy_createStore(rootReducer, loadState(),applyMiddleware(thunkMiddleware))
export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

//разобрать что тут написано выше обязательно!!!

