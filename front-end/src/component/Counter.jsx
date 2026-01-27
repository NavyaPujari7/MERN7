import React ,{useState} from 'react'

const Counter = () => {
    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleReset=()=>{
        setCount(0);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}

export default Counter