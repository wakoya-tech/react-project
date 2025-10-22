import { useState } from "react";
import data from './data';
import './style.css'
export default function Accordion() {
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(getCurrentId){

    console.log(getCurrentId);
setSelected(getCurrentId)
  }
  return (
    <div className="wrapper">
      <div className="accordion">
        {
        data && data.length > 0 &&
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
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
