import React from 'react';
import Input from "./Input/Input";
import Button from "./Button/Button";

type SettingsType = {
    maxValue:number
    minValue:number
    newMaxValue:(value:number)=>void
    newMinValue:(value:number)=>void
    showError:string
    disabled:boolean
    getFromLocalStorage:()=>void
    setToLocalStorage:()=>void
}

export const Settings = (props:SettingsType) => {
    return (
        <div>
            <div className={'settingsContainer'}  >
                <div className={'counter'}>
                    <div className='maxSet'>
                        <Input value={props.maxValue} onChange={props.newMaxValue} showError={props.showError}/>
                    </div>
                    <div className='minSet'>
                        <Input value={props.minValue} onChange={props.newMinValue}  showError={props.showError}/>
                    </div>
                    <div className="getAndSet">
                        <Button disabled={props.disabled} callBack={props.getFromLocalStorage} title={'get'} />
                        <Button disabled={props.disabled} callBack={props.setToLocalStorage} title={'set'} />
                    </div>
                </div>
            </div>
        </div>
    );
};
