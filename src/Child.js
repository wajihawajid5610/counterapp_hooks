import React, { useContext,useState } from "react";
import counterContext from './counterContext';

const Child= () =>{
let [count, updateCounter] = useContext(counterContext)
let [day, changeDay] = useState(true);
  return ( 
    
     <div className={`main ${day ? "dark" : "light"}`}>
     <h1 className='h1'>Counter App</h1><br/><br/> 
      <h2 className='h2'>The value of counter is: {count}</h2>
      <br/><br/>
      <button onClick={()=> updateCounter(++count)} className='btn'>Increase Counter</button>&nbsp;&nbsp;&nbsp;&nbsp;
       <button onClick={()=> updateCounter(--count)} className='btn'>Decrease Counter</button> 
       <br/><br/>
       <button onClick={()=> changeDay(!day)} className='btn'>changeMode</button>
      </div>
    
  );
  }
  export default Child;