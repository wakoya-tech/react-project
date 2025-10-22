import { useState } from 'react'
import './App.css'

function App() {
const [brand,setBrand]=useState("ferrari");
const [model,setModel]=useState("Roma");
const [year,setYear]=useState(new Date());
const [color,setColor]=useState("Green");
return(
  <>
  <h1>My Ferrari</h1>
  <p>It us a {color} {model} from {year}</p>
  </>
)
}
export default App
