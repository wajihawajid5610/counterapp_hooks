import React, { useContext,useState,useReducer } from "react";
import counterContext from './counterContext';
import counterReducer from './counterReduser';



const Child= () =>{
let [count, updateCounter] = useContext(counterContext)
let [day, changeDay] = useState(true);

let [state,dispatch]= useReducer(counterReducer,0);
  return ( 
    
    <div className={`main ${day ? "dark" : "light"}`}>
     <h1 className='h1'>Counter App</h1><br/><br/>

     <h2 className='h2'>The value of Context counter is: {count}</h2>  
     <button onClick={()=> updateCounter(++count)} className='btn'>Increase Counter</button>&nbsp;&nbsp;&nbsp;&nbsp;
     <button onClick={()=> updateCounter(--count)} className='btn'>Decrease Counter</button> 
     <br/><br/><br/><br/>


      <h2 className="h2">The value of Reducer Counter is: {state}</h2>
      <button onClick={()=> dispatch('Increment')} className="btn">increase reducer</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={()=> dispatch('Decrement')} className="btn">increase reducer</button>
      <br/><br/><br/><br/>
      
      <button onClick={()=> changeDay(!day)} className='btn'>changeMode</button>
    </div>
    
  );
  }
  export default Child;