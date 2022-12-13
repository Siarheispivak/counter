import React ,{MouseEvent} from 'react';
type ButtonType = {
    title:string
    callBack:()=>void
    disabled?:boolean
}

const Button = (props:ButtonType) => {

    const onClickHandler = (e:MouseEvent<HTMLButtonElement>) => {
        props.callBack()
    }
    return (
         <div>
             <button disabled={props.disabled} onClick={onClickHandler}>{props.title}</button>
        </div>
    );
};

export default Button;