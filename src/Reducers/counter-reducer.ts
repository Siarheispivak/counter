import {CounterType} from "../App-redux";


type ActionsTypes =
    getFromLocalStorageACType
    | setMaxValueACType
    | setMinValueACType
    | increaseCounterACType
    | resetCounterACType
    | setMaxToLocalStorageACType
    | setMinToLocalStorageACType;

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
            return (action.counter < state.maxValue) ? {...state, counter: action.counter + 1} : state
        }
        case 'RESET-COUNTER': {
            return {...state, counter: state.minValue}
        }
        case 'SET-MAX-VALUE': {
            let error = (action.value > 0 && action.value > state.minValue) ? 'set amount' :'error'
            return (action.value > 0 && action.value > state.minValue) ? {...state, maxValue: action.value,error:error} : {...state,error:error}

            // let error = (action.value > 0 && action.value > state.minValue) ? 'set amount' : 'error'
            // return {...state, maxValue: action.value,error:error}
        }
        case 'SET-MIN-VALUE': {
            return (action.value >= 0 && action.value < state.maxValue) ? {...state, minValue: action.value} : state
        }
        case 'SET-MAX-LOCAL-STORAGE': {
            return state
        }
        case 'SET-MIN-LOCAL-STORAGE': {
            return state
        }
        case 'GET-STORAGE': {
            // {...state,maxValue:maxValueFromLS,minValue:minValueFromLS}
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

type setMaxToLocalStorageACType = ReturnType<typeof setMaxToLocalStorageAC>
export const setMaxToLocalStorageAC = ( maxValue: number, count: number) => {
    return {
        type: 'SET-MAX-LOCAL-STORAGE',
        maxValue,
        count
    } as const
}
type setMinToLocalStorageACType = ReturnType<typeof setMinToLocalStorageAC>
export const setMinToLocalStorageAC = (minValue: number, count: number) => {
    return {
        type: 'SET-MIN-LOCAL-STORAGE',
        minValue,
        count
    } as const
}

type getFromLocalStorageACType = ReturnType<typeof getFromLocalStorageAC>
export const getFromLocalStorageAC = () => {
    return {
        type: 'GET-STORAGE'
    }as const
}
