import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState();
  function handleColor(e){
    setColor(e.target.value);

  }
return(
  <>
  <h1>my favourite color is Red </h1>
  <input type="color" onChange={handleColor} />
  <button type='color'onClick={handleColor}>Blue</button>
  
  </>
)
}

export default App
