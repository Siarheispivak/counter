import {CounterType} from "../App-redux";


type ActionsTypes = setMaxValueACType
    | setMinValueACType
    | increaseCounterACType
    | resetCounterACType
    | setErrorACType
    | setToLocalStorageACType
    | getFromLocalStorageACType;

const initialState: CounterType = {
    counter: 0,
    maxValue: 0,
    minValue: 0,
    error: "x",
    disable: false
}

export const countReducer = (state: CounterType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'INCREASE-COUNTER': {
            return(action.counter < state.maxValue) ? {...state, counter: action.counter + 1} : state
        }
        case 'RESET-COUNTER': {
            return{...state, counter: state.minValue}
        }
        case 'SET-MAX-VALUE': {
            return (action.value > 0 && action.value > state.minValue) ? {...state, maxValue: action.value} : state
        }
        case 'SET-MIN-VALUE': {
            return (action.value >= 0 && action.value < state.maxValue) ? {...state, minValue: action.value} : state
        }
        case 'SET-LOCAL-STORAGE':{

            return state
        }
        case 'GET-LOCAL-STORAGE':{
            return state
        }
        case 'SET-ERROR': {
            return state
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

type setToLocalStorageACType = ReturnType<typeof setToLocalStorageAC>
export const setToLocalStorageAC = (minValue: number,maxValue: number, count: number) => {
    return {
        type: 'SET-LOCAL-STORAGE',
        minValue,
        maxValue,
        count
    } as const
}

type getFromLocalStorageACType = ReturnType<typeof getFromLocalStorageAC>
export const getFromLocalStorageAC = (value: string, count: number) => {
    return {
        type: 'GET-LOCAL-STORAGE',
        value,
        count
    } as const
}

type setErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = (value: string, count: number) => {
    return {
        type: 'SET-ERROR',
        value,
        count
    } as const
}