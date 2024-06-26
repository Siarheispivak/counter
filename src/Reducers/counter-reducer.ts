import {CounterType} from "../App-redux";
import {AppStateType, AppThunk} from "../Store/Store";


const initialState: CounterType = {
    value: 0,
    maxValue: 0,
    minValue: 0,
    error: "set amount" +
        "",
    disable: false
}
type InitialStateType = typeof initialState
export const countReducer = (state: CounterType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'INCREASE-COUNTER': {
            return (action.counter < state.maxValue) ? {...state, value: action.counter + 1} : state
        }
        case 'RESET-COUNTER': {
            return {...state, value: state.minValue}
        }
        case 'SET-MAX-VALUE': {
            let error = (action.maxValue > 0 && action.maxValue > state.minValue) ? 'set amount' : 'error'
            let maximumCounterValue = action.maxValue < action.counterValue  ? action.maxValue : action.counterValue
            return (action.maxValue > 0 && action.maxValue > state.minValue) ? {
                ...state,
                maxValue: action.maxValue,
                error: error,
                value:maximumCounterValue
            } : {...state, error: error}
        }
        case 'SET-MIN-VALUE': {
            let error = (action.minValue >= 0 && action.minValue < state.maxValue) ? 'set amount' : 'error'
            let minimumCounterValue = action.minValue > action.counterValue  ? action.minValue : action.counterValue
            return (action.minValue >= 0 && action.minValue < state.maxValue) ? {
                ...state,
                minValue: action.minValue,
                error: error,
                value:minimumCounterValue
            } : {...state, error: error}
        }
        default:
            return state
    }
}

//Actions
export const increaseCounterAC = (counter: number) => {
    return {
        type: 'INCREASE-COUNTER',
        counter
    } as const
}
export const resetCounterAC = () => {
    return {
        type: 'RESET-COUNTER'
    } as const
}
export const setMaxValueAC = (counterValue:number,maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        counterValue,
        maxValue
    } as const
}
export const setMinValueAC = (counterValue:number,minValue: number) => {
    return {
        type: 'SET-MIN-VALUE',
        counterValue,
        minValue
    } as const
}
// THUNK
export const incValueTC = (): AppThunk => (dispatch, getState: () => AppStateType) => {
    const currentValue = getState().counter.value
    dispatch(increaseCounterAC(currentValue))
}
export const resetValueTC = () : AppThunk => (dispatch) => {
    dispatch(resetCounterAC())
}
export const setMinValueTC = (counterValue:number,minValue: number): AppThunk => (dispatch) => {
    dispatch(setMinValueAC(counterValue,minValue))
}
export const setMaxValueTC = (counterValue:number,maxValue: number): AppThunk => (dispatch) => {
    dispatch(setMaxValueAC(counterValue,maxValue))
}
//Types
type  increaseCounterACType = ReturnType<typeof increaseCounterAC>
type  resetCounterACType = ReturnType<typeof resetCounterAC>
type  setMaxValueACType = ReturnType<typeof setMaxValueAC>
type  setMinValueACType = ReturnType<typeof setMinValueAC>

export type ActionsTypes =
    | setMaxValueACType
    | setMinValueACType
    | increaseCounterACType
    | resetCounterACType;
