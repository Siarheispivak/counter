import React, {ChangeEvent} from 'react';
import s from 'Input.module.scss'
import Announcement from "../Announcement/Announcement";
type InputPropsType = {
    onChange:(value:number)=>void
    announcement:string
    value:number

}

const Input = (props:InputPropsType) => {
     const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
         props.onChange(+(e.currentTarget.value))
    }
    return (
        <div>
            <input value={props.value} type={"number"} onChange={onChangeHandler}/>
            <span>{props.announcement}</span>
        </div>
    );
};

export default Input;