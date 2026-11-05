
import React from "react";
import {useState} from 'react';
import './../styles/App.css';

const App = () => {
  const [name,setname]=useState("");
  return (
    <div id="main">
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}
      placeholder="enter your name"
        />
      {name && <p>Hello, {name}!</p>}
    </div>
  )
}

export default App
