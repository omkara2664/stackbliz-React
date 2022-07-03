import * as React from 'react';
import './style.css';
import {useState} from 'react';

export default function App() {
  const [counter, setCounter]= useState(0)

  const increment =()=>{
     setCounter(counter+1);
  }

  return (
   <div>
    {counter}<button onClick={increment}>increment</button>
    </div>
  );
}
