import React from 'react';
import { FirstName, LastName, City } from './A';


const D = () => {
  return (
    <div>
        <FirstName.Consumer >

            {(fName)=>{
                return(
                    <LastName.Consumer>
                        {(lastName) =>{
                            return(
                                <City.Consumer>
                                    {(city)=>{
                                        return (<h1> {fName} {lastName} {city}</h1>)
                                    }}
                                </City.Consumer>
                            )
                        }}
                    </LastName.Consumer>

                )
            }}

        </FirstName.Consumer>
    </div>
  )
}

export default D