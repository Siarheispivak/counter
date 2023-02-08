import React, {useEffect} from 'react';
import './App.css';
import Button from "./Components/Button/Button";
import Counter from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {
    increaseCounterAC,
    resetCounterAC,
    setErrorAC,
    setMaxValueAC,
    setMinValueAC, setToLocalStorageAC
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
    useEffect(() => {
        let localStorageMaxValue = Number(localStorage.getItem('maxValue'))
        let localStorageMinValue = Number(localStorage.getItem('minValue'))
    }, [])

    const count = useSelector<StoreType,CounterType>(state => state.count)
    const dispatch = useDispatch()
    console.log(count)

    const increaseCounter = () => {
        const action = increaseCounterAC(count.counter)
        dispatch(action)
    }
    const resetCounter = () => {
        dispatch(resetCounterAC())
    }
    const newMaxValue = (value: number) => {
        dispatch(setErrorAC('error',value))
        dispatch(setMaxValueAC(value))
    }
    const newMinValue = (value: number) => {
        dispatch(setMinValueAC(value))
    }
    const setToLocalStorage = () => {
      let maxValueToLS = localStorage.setItem('maxValue', JSON.stringify(count.maxValue))
      let minValueToLS =  localStorage.setItem('minValue', JSON.stringify(count.minValue))
        // dispatch(setToLocalStorageAC(minValueToLS,maxValueToLS))
    }
    const getFromLocalStorage = () => {
        let maxValueFromLS = Number(localStorage.getItem('maxValue'))
        let minValueFromLS = Number(localStorage.getItem('minValue'))
        dispatch(setMaxValueAC(maxValueFromLS))
        dispatch(setMinValueAC(minValueFromLS))
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
                    error={count.error}
                    disabled={count.disable}
                    getFromLocalStorage={getFromLocalStorage}
                    setToLocalStorage={setToLocalStorage}
                />
            </div>
        </>


    );
}

export default AppRedux;
