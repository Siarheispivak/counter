import React, {useEffect} from 'react';
import './App.css';
import Button from "./Components/Button/Button";
import Counter from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {
    increaseCounterAC,
    resetCounterAC,
    setMaxToLocalStorageAC,
    setMaxValueAC,
    setMinToLocalStorageAC,
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

    // useEffect(() => {
    //     let localStorageMaxValue = Number(localStorage.getItem('maxValue'))
    //     let localStorageMinValue = Number(localStorage.getItem('minValue'))
    //     dispatch( setMaxValueAC(localStorageMaxValue))
    //
    // }, [count.maxValue])
    // console.log(count.maxValue)

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
    // const setToLocalStorage = () => {
    //     dispatch(setMaxToLocalStorageAC(count.maxValue,count.counter))
    //     dispatch(setMinToLocalStorageAC(count.minValue,count.counter))
    // }
    // const getFromLocalStorage = () => {
    //     let maxValueFromLS = Number(localStorage.getItem('maxValue'))
    //     let minValueFromLS = Number(localStorage.getItem('minValue'))
    //     // dispatch(getFromLocalStorageAC())
    // }
    // const getFromLocalStorage = () => {
    //     let maxValueFromLS = Number(localStorage.getItem('maxValue'))
    //     let minValueFromLS = Number(localStorage.getItem('minValue'))
    //     dispatch(setMaxValueAC(maxValueFromLS))
    //     dispatch(setMinValueAC(minValueFromLS))
    // }
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
                    // getFromLocalStorage={getFromLocalStorage}
                    // setToLocalStorage={setToLocalStorage}
                />
            </div>
        </>


    );
}

export default AppRedux;
