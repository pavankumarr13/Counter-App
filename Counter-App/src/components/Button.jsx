import { useState } from "react"

function Button(){
    const [counter , setCounter] = useState(0);

    const increament =()=>{
        setCounter(counter+1)
    }
    const decreament =()=>{
        setCounter(counter-1)
    }
    const reset =()=>{
        setCounter(0)
    }

    return(
        <div className="counter-container">
        <p className="counter-text">{counter}</p>
        <button className="counter-btn" onClick={decreament}>Decreament</button>
        <button className="counter-btn" onClick={reset}>Reset</button>
        <button className="counter-btn" onClick={increament}>Increament</button>
        </div>
    );
}

export default Button