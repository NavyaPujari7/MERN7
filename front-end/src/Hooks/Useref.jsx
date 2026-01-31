import { useEffect, useState, useRef, use } from 'react'

const UseRef = () => {
  const [count, setCount] = useState(0);
  //const [value, setValue] = useState(0); 
  const value = useRef(0);
  useEffect(() => {
  value.current +=1;
  });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <p>{`${value.current} times component rendered`}</p>
    </div>
  );
};

export default UseRef;
