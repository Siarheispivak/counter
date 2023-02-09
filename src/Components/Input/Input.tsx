import React, {ChangeEvent} from 'react';
import Announcement from "../Announcement/Announcement";
type InputPropsType = {
    onChange:(value:number)=>void
    value:number
    showError:string
}

const Input = (props:InputPropsType) => {
     const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
         props.onChange(+(e.currentTarget.value))
    }
    return (
        <div>
            <input value={props.value} type={"number"} onChange={onChangeHandler}/>
            <Announcement  showError={props.showError}/>
        </div>
    );
};

export default Input;