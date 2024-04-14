import { useState } from "react";
import Candlestick from "../../Classes/Candlestick";
//import Line from "../../Classes/Line";
import ObjecToForm from "../../Components/ObjecToForm";

export default function ChartSideBar() {
  const [visibelty, setVisibelty] = useState(1)
  
  //const line = new Line([],[],'line01') 
  const candles = new Candlestick([],[],[],[],[],'Candlestick01') 

  return (
    <div className="scroll-container" style={{overflowY: "scroll", height: '100%', position: 'absolute'}}>
      <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className={"nav-link" + (visibelty == 1 ? " active" : "")}  style={{cursor: 'pointer'}} onClick={() => setVisibelty(1)}>Object Tree</a>
            </li>
            <li className="nav-item">
                <a className={"nav-link" + (visibelty == 2 ? " active" : "")} style={{cursor: 'pointer'}} onClick={() => setVisibelty(2)}>Actual Object</a>
            </li>
        </ul>
        <div className={"card  border-top-0" + (visibelty != 1 ? " visually-hidden" : "")}>
            <div className="card-body pt-4">
                ** OBJECT TREE **
            </div>
        </div>
        <div className={"card border-top-0" + (visibelty != 2 ? " visually-hidden" : "")}>
            <div className="card-body input-group">
                <ObjecToForm object={candles} />
            </div>
        </div>
    </div>
  )
}
