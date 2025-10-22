import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  return (
    <div className="container">
  <button onClick={()=>setTypeOfColor('hex')} >Generate Random Color</button>
  <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>  
  <button>Generate Random Color</button>
    </div>
  );
}
