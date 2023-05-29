import React from 'react';
import './App.css';
import Button from "./Components/Button/Button";
import Counter from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings";
import {
    geMinMaxFromLocalStorageTC,
    incValueTC,
    resetValueTC,
    setMaxValueTC,
    setMinMaxToLocalStorageTC,
    setMinValueTC
} from "./Reducers/counter-reducer";
import {useAppDispatch, useAppSelector} from "./Store/Store";


export type CounterType = {
    value: number,
    maxValue: number,
    minValue: number,
    error: string,
    disable: boolean
}

function AppRedux() {
    const count = useAppSelector<CounterType>(state => state.counter)
    const dispatch = useAppDispatch()

    const increaseCounter = () => {
        dispatch(incValueTC())
    }
    const resetCounter = () => {
        dispatch(resetValueTC())
    }
    const newMaxValue = (value: number) => {
        dispatch(setMaxValueTC(value))
    }
    const newMinValue = (value: number) => {
        dispatch(setMinValueTC(value))
    }
    const setToLocalStorage = () => {
        dispatch(setMinMaxToLocalStorageTC())
    }
    const getFromLocalStorage = () => {
        dispatch(geMinMaxFromLocalStorageTC())
    }
    return (
        <>
            {/*<div className="snow"></div>*/}
            <div className={'App'}>
                <div className={'container'}>
                    <div className={'counterApp'}>
                        <Counter value={count.value} maxValue={count.maxValue}/>
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
