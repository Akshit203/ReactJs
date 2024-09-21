import React, { useState } from 'react'

const UseState = () => {


  const [counter, setCounter] = useState(0)

  const increase = () =>{
    setCounter(counter + 1)
  }

  const decrease =()=>{
    setCounter(counter - 1)
  }

  const [color, setColor] = useState("no color");


  return (
    <>
      <div>{counter}</div>
      <button className = "border-2" onClick={increase}> Increase </button>
      <button className = "border-2" onClick={decrease}> Decrease </button>

      <div> clicked color is {color}</div>

      <button onClick={()=> setColor('red')}>Red</button>
      <button>Blue</button>
      <button>Green</button>

    </>
    

  )
}

export default UseState