import React from 'react';
import './App.css';
import Button from "./Components/Button/Button";
import Counter from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings";
import {useAppDispatch, useAppSelector} from "./Store/Store";
import {
    incValueTC,
    resetValueTC,
    setMaxValueTC,
    setMinValueTC
} from "./Reducers/counter-reducer";


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
    const newMaxValue = (maxValue: number) => {
        dispatch(setMaxValueTC(count.value,maxValue))
    }
    const newMinValue = (minValue: number) => {
        dispatch(setMinValueTC(count.value,minValue))
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
                />
            </div>
        </>


    );
}

export default AppRedux;
