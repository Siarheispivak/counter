import React from 'react';
import './App.css';
import Button from "./Components/Button/Button";
import Counter from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {
    geMinMaxFromLocalStorageAC,
    increaseCounterAC,
    resetCounterAC,
    setMaxValueAC,
    setMinMaxToLocalStorageAC,
    setMinValueAC
} from "./Reducers/counter-reducer";
import {StoreType} from "./Store/Store";


export type CounterType = {
    counter: number,
    maxValue: number,
    minValue: number,
    error: string,
    disable: boolean
}

function AppRedux() {
    const count = useSelector<StoreType,CounterType>(state => state.count)
    const dispatch = useDispatch()

    const increaseCounter = () => {
        dispatch(increaseCounterAC(count.counter))
    }
    const resetCounter = () => {
        dispatch(resetCounterAC())
    }
    const newMaxValue = (value: number) => {
        dispatch(setMaxValueAC(value))
    }
    const newMinValue = (value: number) => {
        dispatch(setMinValueAC(value))
    }
    const setToLocalStorage = () => {
        dispatch(setMinMaxToLocalStorageAC())
    }
    const getFromLocalStorage = () => {
        dispatch(geMinMaxFromLocalStorageAC())
    }
    return (
        <>
            {/*<div className="snow"></div>*/}
            <div className={'App'}>
                <div className={'container'}>
                    <div className={'counterApp'}>
                        <Counter value={count.counter} maxValue={count.maxValue}/>
                        <div className={'buttonWrapper'}>
                            <Button disabled={count.disable} title={'inc'} callBack={increaseCounter}/>
                            <Button disabled={count.disable} title={'reset'} callBack={resetCounter}/>
                        </div>
                    </div>
                </div>
                <Settings
                    maxValue={count.maxValue}
                    minValue={count.minValue}
                    newMaxValue={newMaxValue}
                    newMinValue={newMinValue}
                    showError={count.error}
                    disabled={count.disable}
                    getFromLocalStorage={getFromLocalStorage}
                    setToLocalStorage={setToLocalStorage}
                />
            </div>
        </>


    );
}

export default AppRedux;
