// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// //
// export default App
// function App() {
//   return (
//     <h1>Hello</h1>
//   )
// }
// //

// class App extends component{
//   return(){
//     return{
//     <h1>Hello World</h1>
//   }
// }
// }
import {Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import Counter from './component/Counter'
import UseStates from './Hooks/UseStates'
import Login from './Auth/Login';
import Hooks from './Hooks/Hook';
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi';
import Signup from './Auth/signup';
import UseRef from './Hooks/Useref';
import UseReducer from './Hooks/UseReducer';

const App = () =>{
  
   return(    
   <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home name="Navya"/>}/>
      <Route path='/about' element={<About name="Navyaa" age={20} dept="CS&DS"/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/counter' element={<Counter/>}/>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>

    {/* Hooks */}
    <Route path='/hook' element={<Hooks/>}>
      <Route path='useEffect' element={<UseEffect/>}/>
      <Route path='useState' element={<UseStates/>}/>
      <Route path='useEffectApi' element={<UseEffectApi/>}/>
      <Route path='useRef' element={<UseRef/>}/>
      <Route path='useReducer' element={<UseReducer/>}/>
      </Route>
      </Routes>
    </>
   );
};
export default App;