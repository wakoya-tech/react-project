import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState();
 
function handleColor(e){
 
  setColor("Brown")
}
return(
  <>
  <h1>my favourite color is {color} </h1>
  
  <button onClick={handleColor}>Blue</button>
  
  </>
)
}

export default App
