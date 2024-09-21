import React from 'react'
import B from './B'

const FirstName = React.createContext();
const LastName = React.createContext();
const City = React.createContext();


const A = () => {
  return (
    <div>
        <FirstName.Provider value ="Ak">
            <LastName.Provider value="Gupta">
                <City.Provider value= "Chandigarh">
                   <B/>
                </City.Provider>
            </LastName.Provider>  
        </FirstName.Provider>
    </div>
  )
}

export default A;
export {FirstName, LastName, City}
