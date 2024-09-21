import React from 'react'
import B from './B'
const FirstName = React.createContext();
const LastName = React.createContext();

const A = () => {
  return (
    <FirstName.Provider value = "Chandigarh">
        <LastName.Provider value = "Panchkula">
            <B/>
        </LastName.Provider>
    </FirstName.Provider>
    
  )
}

export default A
export {FirstName, LastName}
