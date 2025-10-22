import { useState } from 'react'
import './App.css'

function App() {
const [brand,setBrand]=useState("ferrari");
const [model,setModel]=useState("Roma");
const [year,setYear]=useState(new Date().getFullYear());
const [color,setColor]=useState("Green");
function handleBrand(e){
setBrand(e.target.value);

}
function handleModel(e){
  setModel(e.target.value);
}
function handleYear(e){
  setYear(e.target.value);
}
function handleColor(e){
  setColor(e.target.value);
}
return(
  <>
  <h1>My {brand}</h1>
  <p>It us a {color} {model} from {year}</p>
  <input type="text" onChange={handleBrand} placeholder='please enter brand'/>
  <br />
  <input type="text" onChange={handleColor} placeholder='please enter brand'/>
 <br />
  <input type="text" onChange={handleModel} placeholder='please enter brand'/>
  <br />
  <input type="number" onChange={handleYear} placeholder='please enter brand'/>

  </>
)
}
export default App
