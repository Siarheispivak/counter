import {CounterType} from "../App-redux";
import {AppStateType} from "../Store/Store";
import {Dispatch} from "redux";


type ActionsTypes = getMinMaxFromLocalStorageACType
    | setMaxValueACType
    | setMinValueACType
    | increaseCounterACType
    | resetCounterACType
    | setMinMaxToLocalStorageACType;
const initialState: CounterType = {
    value: 0,
    maxValue: 0,
    minValue: 0,
    error: "set amount" +
        "",
    disable: false
}
type InitialStateType = typeof initialState
export const countReducer = (state: CounterType = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'INCREASE-COUNTER': {
            return (action.counter < state.maxValue) ? {...state, value: action.counter + 1} : state
        }
        case 'RESET-COUNTER': {
            return {...state, value: state.minValue}
        }
        case 'SET-MAX-VALUE': {
            let error = (action.value > 0 && action.value > state.minValue) ? 'set amount' : 'error'
            return (action.value > 0 && action.value > state.minValue) ? {
                ...state,
                maxValue: action.value,
                error: error
            } : {...state, error: error}
        }
        case 'SET-MIN-VALUE': {
            let error = (action.value >= 0 && action.value < state.maxValue) ? 'set amount' : 'error'
            return (action.value >= 0 && action.value < state.maxValue) ? {...state, minValue: action.value, error: error} : {...state, error: error}
        }
        case 'SET-MIN-MAX-LOCAL-STORAGE': {
            return state
        }
        case 'GET-MIN-MAX-LOCAL-STORAGE': {
            return {...state, maxValue: action.maxValue, minValue: action.minValue, error: 'set amount'}
        }
        default:
            return state
    }
}

//Actions
type  increaseCounterACType = ReturnType<typeof increaseCounterAC>
export const increaseCounterAC = (counter: number) => {
    return {
        type: 'INCREASE-COUNTER',
        counter
    } as const
}
type  resetCounterACType = ReturnType<typeof resetCounterAC>
export const resetCounterAC = () => {
    return {
        type: 'RESET-COUNTER'
    } as const
}
type  setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET-MAX-VALUE',
        value
    } as const
}
type  setMinValueACType = ReturnType<typeof setMinValueAC>
export const setMinValueAC = (value: number) => {
    return {
        type: 'SET-MIN-VALUE',
        value
    } as const
}
type setMinMaxToLocalStorageACType = ReturnType<typeof setMinMaxToLocalStorageAC>
export const setMinMaxToLocalStorageAC = () => {
    return {
        type: 'SET-MIN-MAX-LOCAL-STORAGE'
    } as const
}
type getMinMaxFromLocalStorageACType = ReturnType<typeof geMinMaxFromLocalStorageAC>
export const geMinMaxFromLocalStorageAC = (max:number,min:number) => {
    return {
        type: 'GET-MIN-MAX-LOCAL-STORAGE',
        maxValue:max,
        minValue: min
    } as const
}



// THUNK
export const incValueTC = () => (dispatch: Dispatch,getState:()=>AppStateType) => {
    const currentValue = getState().counter.value
    localStorage.setItem('counterValue',JSON.stringify(currentValue + 1))
    dispatch(increaseCounterAC(currentValue))
}
export const resetValueTC = () => (dispatch: Dispatch) => {

    dispatch(resetCounterAC())
}
export const setMinValueTC = (value:number) => (dispatch: Dispatch) => {
    dispatch(setMinValueAC(value))
}
export const setMaxValueTC = (value:number) => (dispatch: Dispatch) => {
    dispatch(setMaxValueAC(value))
}
export const setMinMaxToLocalStorageTC = () => (dispatch: Dispatch,getState:()=>AppStateType) => {
    const max = getState().counter.maxValue
    const min = getState().counter.minValue
    Number(localStorage.setItem('MAX', JSON.stringify(max)));
    Number(localStorage.setItem('MIN', JSON.stringify(min)));
    dispatch(setMinMaxToLocalStorageAC())
}
export const geMinMaxFromLocalStorageTC = () => (dispatch: Dispatch,getState:()=>AppStateType) => {
    const max = localStorage.getItem('MAX');
    const min = localStorage.getItem('MIN');

    dispatch(geMinMaxFromLocalStorageAC(Number(max),Number(min)))
}



// export const setMinValueTC = () => (dispatch: Dispatch) => {
// let valueAsString = localStorage.getItem('counterValue')
//   if(valueAsString){
//       dispatch(setValueAC(+valueAsString))
//   }
// }