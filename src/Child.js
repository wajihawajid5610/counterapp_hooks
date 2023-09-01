import React, { useContext } from "react";
import counterContext from './counterContext';


const Child= () =>{
    let countervalue = useContext(counterContext);
    return(
        <div>This is my first child 
            <h1>The value of counter is: {countervalue}</h1>
        
        </div>
       
    );
}
export default Child;