import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);
 function Add(){
setCount(count+1)
 }
 function sub(){
  setCount(count-1);
 }

return(
  <>
  <h1>my favourite color is {count} </h1>
  
  <button onClick={Add}>Add</button>
  <button onClick={sub}>Sub</button>
  
  </>
)
}

export default App
