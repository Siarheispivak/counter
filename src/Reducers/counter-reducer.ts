import {CounterType} from "../App-redux";


type ActionsTypes = getMinMaxFromLocalStorageACType
    | setMaxValueACType
    | setMinValueACType
    | increaseCounterACType
    | resetCounterACType
    | setMinMaxToLocalStorageACType;
const initialState: CounterType = {
    counter: 0,
    maxValue: 0,
    minValue: 0,
    error: "set amount" +
        "",
    disable: false
}
export const countReducer = (state: CounterType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'INCREASE-COUNTER': {
            return (action.counter < state.maxValue) ? {...state, counter: action.counter + 1} : state
        }
        case 'RESET-COUNTER': {
            return {...state, counter: state.minValue}
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
            Number(localStorage.setItem('MAX', JSON.stringify(state.maxValue)));
            Number(localStorage.setItem('MIN', JSON.stringify(state.minValue)));
            return state
        }
        case 'GET-MIN-MAX-LOCAL-STORAGE': {
            let max = Number(localStorage.getItem('MAX'))
            let min = Number(localStorage.getItem('MIN'))
            return {...state, maxValue: max, minValue: min, error: 'set amount'}
        }
        default:
            return state
    }
}
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
export const geMinMaxFromLocalStorageAC = () => {
    return {
        type: 'GET-MIN-MAX-LOCAL-STORAGE'
    } as const
}
