import ChartBody from "./ChartBody";
import ChartNavBar from "./ChartNavBar";
import ChartSideBar from "./ChartSideBar";

export default function ChartViwer() {
  return (
    <div style={{margin: '0px',padding: '0px' , width: '100vw', height: '100vh'}}>
      <div className="row" style={{margin: '0px',padding: '0px' , width: '100vw', height: '7vh'}}>
        <div className="col" style={{margin: '0px',padding: '0px' , width: '100vw', height: '7vh'}}>
          <ChartNavBar />
        </div>
      </div>
      <div className="row" style={{margin: '0px',padding: '0px' , width: '100vw', height: '93vh'}}>
        <div className="col col-10 border border-4" style={{margin: '0px',padding: '0px'}}>
          <ChartBody />
        </div>
        <div className="col col-2 border border-4 border-start-0" style={{margin: '0px',padding: '0px'}}>
          <ChartSideBar />
        </div>
      </div>
    </div>
  )
}
