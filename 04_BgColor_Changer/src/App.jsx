import React, { useState } from 'react';

export default function App() {

  const [color, changeColor] = useState("bg-white")
  return (
    <>
    <h1 className='flex justify-center font-mono text-4xl p-5 border'>COLOR CHANGER</h1>
    
    <div className={`h-screen w-full ${color} flex items-center justify-center`}>

      <div className='bg-white p-2 '>
        <div className='flex flex-wrap justify-center '>
          <button onClick={()=> changeColor("bg-red-600")} className='m-5 border-4 p-5 bg-red-500 text-white'>Red</button>
          <button  onClick={()=> changeColor("bg-blue-700")}  className='m-5 border-4 p-5 bg-blue-600 text-white'>Blue </button>
          <button  onClick={()=> changeColor("bg-green-500")}  className='m-5 border-4 p-5 bg-green-500 text-white'>Green</button>
          <button  onClick={()=> changeColor("bg-orange-500")}  className='m-5 border-4 p-5 bg-orange-500 text-white'>Orange</button>
          <button  onClick={()=> changeColor("bg-white")}  className='m-5 border-4 p-5 bg-white text-black '>White</button>
          <button  onClick={()=> changeColor("bg-black")}  className='m-5 border-4 p-5 bg-black text-white'>Black</button>
          <button  onClick={()=> changeColor("bg-pink-400")}  className='m-5 border-4 p-5 bg-pink-500 text-white'>Pink</button>
        </div>
      </div>

    </div>

    </>
  )
}

