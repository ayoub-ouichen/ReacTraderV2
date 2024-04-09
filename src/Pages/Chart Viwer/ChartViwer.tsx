import ChartBody from "./ChartBody";
import ChartNavBar from "./ChartNavBar";
import ChartSideBar from "./ChartSideBar";

export default function ChartViwer() {
  return (
    <div className="chart-container">
      <div className="chart-navbar">
        <ChartNavBar />
      </div>
      <div className="chart-body">
        <ChartBody />
      </div>
      <div className="chart-sidebar">
        <ChartSideBar />
      </div>
    </div>
  )
}
