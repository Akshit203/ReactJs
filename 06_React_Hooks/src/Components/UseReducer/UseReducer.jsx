import React, { useReducer } from 'react'

const UseReducer = () => {

    const initialState = 0;

    const reducer =(state, action)=>{
        switch(action){
            case "Increment" :
                return state + 1;
            case "Decrement" :
                return state - 1;
            default :
                return state;
        }
    }

    /* The useReducer hook is used here, which takes the reducer function and initialState as arguments.
       It returns two values:
       -- state: The current state of the component, initialized to initialState (which is 0).
       -- dispatch: A function used to dispatch actions that will trigger changes in the state
          according to the reducer function.
    */
    const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <>
        <h1 className='text-2xl'> UseReducer Hook </h1>

        <div> {state}</div>

        <button onClick={()=> dispatch("Increment")} className='border-2 border-black p-2 m-2'> Increase </button>
        <button onClick={()=> dispatch("Decrement")} className='border-2 border-black p-2 m-2'> Decrease </button>


 
    </>


  )
}

export default UseReducer