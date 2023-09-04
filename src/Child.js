import React, { useContext } from "react";
import counterContext from './counterContext';


/*const Child= () =>{
    let [countervalue,updateValue] = useContext(counterContext);
    return(
        <div>This is my first child 
            <h1>The value of counter is: {countervalue}</h1>
            <button onClick={()=> updateValue(++countervalue )} >Increase Counter</button>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>       
    );
}
export default Child;*/

const Child= () =>{
let [count, updateCounter,day,changeDay] = useContext(counterContext)
  //let [day, changeDay] = useState(true);
  return (
    <div className={`main ${day ? "light" : "dark"}`}>
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