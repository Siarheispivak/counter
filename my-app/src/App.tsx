import React, {useState} from 'react';
import './App.css';
import Button from "./Components/Button/Button";
import Counter from "./Components/Counter/Counter";
import Announcement from "./Components/Announcement/Announcement";
import Input from "./Components/Input/Input";





function App() {
    const [counter, setCounter] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [announcement, setAnnouncement] = useState<string>('Choose amount')




    const increaseCounter = () => {
            setCounter(counter +1)
    }
    const resetCounter = () => {
        setCounter(minValue)
    }

    const newMaxValue = (value:number) => {
        if(value < 0){
            setAnnouncement('Enter the right amount,please!')
        }else {
            setAnnouncement('Save your amount')
            setMaxValue(value)
        }

    }
    const newMinValue = (value:number) => {
        if(value < maxValue && value > -1){
            setMinValue(value)
            setCounter(value)
        }else{
            setAnnouncement('Enter the right amount,please!')
        }
    }

const disabled = counter === maxValue
const disabled2 = counter === minValue

    return (
        <div className={'App'}>
            <div className={'container'}>
                <div className={'counterApp'}>

                    <Counter value={counter} maxValue={maxValue}/>
                    <div className={'buttonWrapper'}>
                        <Button disabled={disabled} title={'inc'} callBack={increaseCounter}/>
                        <Button disabled={disabled2} title={'reset'} callBack={resetCounter}/>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={'counter'}>
                    <Input value={maxValue} onChange={newMaxValue} announcement={announcement}/>
                    <Input  value={minValue} onChange={newMinValue} announcement={announcement}/>
                    <Button disabled={disabled} title={'set'} callBack={()=>{}}/>//local storage fn

                </div>
            </div>
        </div>
    );
}
export default App;
