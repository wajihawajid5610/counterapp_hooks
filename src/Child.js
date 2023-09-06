import React, { useContext,useReducer } from "react";
import counterContext from './counterContext';
import counterReducer from './counterReduser';

const Child= () =>{ 
let [count,updateCounter] = useContext(counterContext)
let [state,dispatch]= useReducer(counterReducer,0);
  return ( 
    
    <div className='main'>
     <h1 className='h1'>Counter App</h1><br/><br/>

     <h2 className='h2'>The value of Context counter is: {count}</h2>  
     <button onClick={()=> updateCounter(++count)} className='btn'>Increase Counter</button>&nbsp;&nbsp;&nbsp;&nbsp;
     <button onClick={()=> {if (count!==0)updateCounter(--count); else alert('counter not be less than zero');count = 0 }}className='btn'>Decrease Counter</button> &nbsp;&nbsp;&nbsp;&nbsp;
     <button onClick={()=> updateCounter(count=0)} className='btn'>Reset Counter</button>&nbsp;&nbsp;&nbsp;&nbsp;
     <br/><br/><br/><br/>


      <h2 className="h2">The value of Reducer Counter is: {state}</h2>
      <button onClick={()=> dispatch('Increment')} className="btn">Increase Counter</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={()=> dispatch('Decrement')} className="btn">Decrease Counter</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={()=> dispatch('Reset')} className="btn">Reset Counter</button>
      <br/><br/><br/><br/>
      
    
    </div>
    
  );
  }
  export default Child;