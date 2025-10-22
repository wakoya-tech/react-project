import { useState } from "react";
import data from './data'
export default function Accordion() {
    const [selected,setSelected]=useState(null)
    return <div className="wrapper">
        {
            data && data.length > 0 ? 
            data.
        }
    </div>;
  }
  