import { useState } from "react";
import data from './data';

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 &&
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              item
            </div>
          ))
        }
      </div>
    </div>
  );
}
