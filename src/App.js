import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import counterContext from './counterContext';
import './Child.css';
export default function App() {
  let [count, updateCounter] = useState([0]);
  return(
    <counterContext.Provider value={[count,updateCounter]}>
      <div>
        <Parent/>
      </div>
    </counterContext.Provider>

  ); 
}


/*let [count, updateCounter] = useState(0);
  let [day, changeDay] = useState(true);
  return (
    <div className={`main ${day ? "light" : "dark"}`}>
    <h1 className='h1'>Counter App</h1><br/><br/> 
    <h2 className='h2'>The value of counter is {count}</h2>
    <br/><br/>
    <button onClick={()=> updateCounter(count + 1)} className='btn'>Increase Counter</button>&nbsp;&nbsp;&nbsp;&nbsp;
     <button onClick={()=> updateCounter(count - 1)} className='btn'>Decrease Counter</button> 
     <br/><br/>
     <button onClick={()=> changeDay(!day)} className='btn'>changeMode</button>
    </div>
  );*/