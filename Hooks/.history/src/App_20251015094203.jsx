import { useState } from 'react'
import './App.css'

function App() {
const [brand,setBrand]=useState("ferrari");
const [model,setModel]=useState("Roma");
const [year,setYear]=useState(new Date().getFullYear());
const [color,setColor]=useState("Green");
const [car,setCar]=useState({
  brand:"ferrari",
  model:"roma",
  year:"2025",
  color:"red"
})
/*function handleBrand(e){
setBrand(e.target.value);

}/*
function handleModel(e){
  setModel(e.target.value);
}
function handleYear(e){
  setYear(e.target.value);
}
function handleColor(e){
  setColor(e.target.value);
}*/
return(
  <>
  <h1>My {car.brand}</h1>
  <p>It us a {car.color} {car.model} from {car.year}</p>
  

  </>
)
}
export default App
