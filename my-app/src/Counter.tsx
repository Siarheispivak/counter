import React, {useState} from 'react';
import Button from "./Button";

type CounterPropsType = {
    value:number

}

const Counter = (props:CounterPropsType) => {
    return (
        <div>
            {props.value}
        </div>
    );
};

export default Counter;