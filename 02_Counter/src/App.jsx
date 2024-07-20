import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount]= useState(0)

  // let count = 0;

  const addValue = () => {
    count += 1;
    if (count > 20){
      return;
    }
    setCount(count);

  }

  const removeVal =()=>{
    if (count <= 0){
      return;
    }
    setCount(count - 1)

  }

  return (
    <>

    <h1> Counter App </h1>
    <h2>Count value : {count} </h2>

    <button onClick={addValue}>Increment</button> 
    <br/> <br/>
    <button onClick={removeVal}>Decrement</button>
    
    </>

  )
}

export default App
