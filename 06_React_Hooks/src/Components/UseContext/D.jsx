import React from 'react'
import { FirstName, LastName } from './A'
import { useContext } from 'react'

const D = () => {
    const name = useContext(FirstName)
    const name2 = useContext(LastName)

  return (
    <>
    
    <div>{name} {name2}</div>

    </>
  )
}

export default D