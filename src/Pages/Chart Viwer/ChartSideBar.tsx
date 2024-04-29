import ObjecToForm from "../../Components/ObjecToForm";
import ObjecToList from "../../Components/ObjecToList";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setTabNumber, SideBarParam } from "../../features/sidebar/sidebarSlice";
import CandlestickForm from "../../Forms/CandlestickForm";

export default function ChartSideBar() {
  const SideBarParams = useAppSelector(SideBarParam)
  const dispatch = useAppDispatch()

  return (
    <div className="scroll-container" style={{overflowY: "scroll", width: '100%', height: '100%', position: 'absolute'}}>
      <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className={"nav-link" + (SideBarParams.tab == 1 ? " active" : "")}  style={{cursor: 'pointer'}} onClick={() => dispatch(setTabNumber(1))}>Object Tree</a>
            </li>
            <li className="nav-item">
                <a className={"nav-link" + (SideBarParams.tab == 2 ? " active" : "")} style={{cursor: 'pointer'}} onClick={() => dispatch(setTabNumber(2))}>Actual Object</a>
            </li>
        </ul>
        <div className={"card  border-top-0" + (SideBarParams.tab != 1 ? " visually-hidden" : "")}>
            <div className="card-body p-1 input-group">
                <ObjecToList />
            </div>
        </div>
        <div className={"card border-top-0" + (SideBarParams.tab != 2 ? " visually-hidden" : "")}>
            <div className="card-body p-1 input-group">
                <CandlestickForm />
            </div>
        </div>
    </div>
  )
}
