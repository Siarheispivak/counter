import React, {useState} from 'react';
import './App.css';
import Button from "./Button";
import Counter from "./Counter";

type AppPropsType = {

}

function App() {
  const [counter, setCounter] = useState<number>(0)
  const [disableButton, setDisableButton] = useState<boolean>(false)


  const increaseCounter = () => {
      let counterInc = counter
      if(counterInc < 5){
          ++counterInc
          setCounter(counterInc)
      }else if(counterInc === 5){
          setDisableButton(true)
      }


  }
    const resetCounter = () => {

        setCounter(0)
        setDisableButton(!disableButton)
        console.log(disableButton)
    }
      return (

          <div>
              <Counter value={counter} />
              {disableButton ? <Button disabled={true} title={'inc'} callBack={increaseCounter} /> : <Button title={'inc'} callBack={increaseCounter} />}
              {!disableButton ? <Button disabled={true} title={'reset'} callBack={resetCounter} /> : <Button title={'reset'} callBack={resetCounter} />}

          </div>
      );
}
export default App;
