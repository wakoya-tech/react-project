import { useState } from "react";
import data from './data';
import './style.css'
export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection,setEnableMultiSelection]=useState(false);
  const [multiple,setMultiple]=useState([]);

  function handleSingleSelection(getCurrentId){

     console.log(getCurrentId);
     setSelected(getCurrentId)
  }
  function handleMultiSelection(getCurrentId){
    let cpyMultiple=[...multiple];
    const findIndexOfCurrentId=cpyMultiple.indexOf(getCurrentId)
  console.log(findIndexOfCurrentId);
  if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
    else cpyMultiple.splice(findIndexOfCurrentId)
  setMultiple(cpyMultiple)
  }
  }
  return (
    <div className="wrapper">
      <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multi selection</button>
      <div className="accordion">
        {
        data && data.length > 0 &&
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div onClick= {enableMultiSelection ? ()=>()=>handleMultiSelection(dataItem.id) :
       ()=>handleSingleSelection(dataItem.id)
        
              } className="title">
                <h3>{dataItem.question}</h3>
                
                <span>+</span>
              </div>
              {
                selected === dataItem.id? 
                <div>{dataItem.answer}</div> : null
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}
