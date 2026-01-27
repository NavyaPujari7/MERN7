// useEffect(()=>{
//     //side effect code
//     }, [dependencies])

import React, {useEffect} from 'react'
const UseEffect = () => {
    const [count,setCount]=React.useState(0);
    useEffect(() => {
        console.log("UseEffect mounted");
    });
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
;
}


export default UseEffect;