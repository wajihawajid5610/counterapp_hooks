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
