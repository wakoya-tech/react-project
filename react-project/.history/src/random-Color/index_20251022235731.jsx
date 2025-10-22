import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  return (
    <div className="container">
      <button>Generate Random Color</button>
  <button>Create RGB Color</button>  
    </div>
  );
}
