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
              <div className="title">
                <h3>{dataItem.question}</h3>
                <h2>{dataItem.answer}</h2>
                <span>+</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
