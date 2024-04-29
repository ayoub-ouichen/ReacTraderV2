import { deletePlotlyDataIndex, plotlyData } from "../features/plotlyData/plotlyDataSlice"
import { setObjectIndex } from "../features/sidebar/sidebarSlice"
import { useAppDispatch, useAppSelector } from "../hooks"

export default function ObjecToList() {
    const plt_data = useAppSelector(plotlyData)
    const dispatch = useAppDispatch()

    function removeTrace(index: number) {
        dispatch(deletePlotlyDataIndex(index))
    }
    
  return (
    <>
        <div className="input-group">
            {
                plt_data.data.map((value, index) => (
                    <div className="card my-1 rounded-2 sidebar-card" style={{width: '100%'}}  key={index}>
                        <div className="card-body p-1">
                            <div className="my-1">
                                <div className="m-2">
                                    <div className="d-inline w-auto">
                                        <span className="fw-bold">{value.name}</span>
                                    </div>
                                    <div className="d-inline float-end">
                                        <button type="button" className="btn btn-sm cust-badge-btn text-dark">
                                            <i className="bi bi-eye"></i>
                                            {/* <i className="bi bi-eye-slash"></i> */}
                                        </button>
                                        <button onClick={() => {dispatch(setObjectIndex({tab: 2, actualObjectIndex: index}))}} type="button" className="btn btn-sm cust-badge-btn text-dark">
                                            <i className="bi bi-nut"></i>
                                        </button>
                                        <button onClick={() => {removeTrace(index)}} type="button" className="btn btn-sm cust-badge-btn text-dark">
                                            <i className="bi bi-x-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}
