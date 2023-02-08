import React, {ChangeEvent} from 'react';
import Announcement from "../Announcement/Announcement";
type InputPropsType = {
    onChange:(value:number)=>void
    value:number
    error:string
}

const Input = (props:InputPropsType) => {
     const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
         props.onChange(+(e.currentTarget.value))
    }
    return (
        <div>
            <input value={props.value} type={"number"} onChange={onChangeHandler}/>
            <Announcement  error={props.error}/>
        </div>
    );
};

export default Input;