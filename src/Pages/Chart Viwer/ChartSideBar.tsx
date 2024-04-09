import Line from "../../Classes/Line";
import ObjecToForm from "../../Components/ObjecToForm";

export default function ChartSideBar() {
  
  const line = new Line([],[],'line01') 

  return (
    <div className="scroll-container" style={{overflowY: "scroll", height: '100%', position: 'absolute'}}>
      <ObjecToForm object={line} />
    </div>
  )
}
