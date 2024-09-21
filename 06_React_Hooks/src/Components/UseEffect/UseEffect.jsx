import React, { useEffect, useState } from 'react'

export const UseEffect = () => {


  const [counter, setCounter] = useState(0);
  const [content, setContent] = useState('posts')
  const [items, setItems] = useState([])




  useEffect(()=>{
    console.log("component_Mount")
  }, [])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/'+content)
    .then(response => response.json())
    .then(json => setItems(json))
  
    // code that we want to run
    console.log(`component_Update`)

    // optional return function
    return ()=>{
        console.log(`cleaned up or Component_UnMount`)
    }

  }, [content]) // dependency array



  return (

    <div>

        <button onClick={()=>{setContent('Posts')}} className='border-black border-2 p-2 m-4'>Posts</button>
        <button onClick={()=>{setContent('Users')}} className='border-black border-2 p-2 m-4'>Users</button>
        <button onClick={()=>{setContent('Comments')}} className='border-black border-2 p-2 m-4'>Comments</button>

        {content}

        <div> Button clicked {counter} Times </div>
        <button onClick={()=> setCounter(counter + 1)}>Click Me</button>

        <ul>
          {setItems && items.map(item =>{

            return <li key={item.id}> {item.id}</li>

          })}
        </ul>
        
    </div>
  )
}

export default useEffect;
