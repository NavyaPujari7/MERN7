import React from 'react';
import {Link, Outlet} from 'react-router-dom';
const Hooks = () => {
  return (
    <div>
        <ol>
            <li><Link to='useState'>useStates</Link></li>
            <li><Link to='useEffect'>useEffect</Link></li>
            <li><Link to='useEffectApi'>useEffectwithApi</Link></li>
            <li><Link to='useRef'>useRef</Link></li>
        </ol>
        <Outlet/>
    </div>
  )
}

export default Hooks