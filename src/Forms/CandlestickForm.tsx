import { useEffect, useState } from "react"
import { addPlotlyData, deletePlotlyData, plotlyData } from "../features/plotlyData/plotlyDataSlice"
import { SideBarParam } from "../features/sidebar/sidebarSlice"
import { useAppDispatch, useAppSelector } from "../hooks"
import _ from 'lodash'
import Candlestick from "../Classes/Candlestick"

export default function CandlestickForm() {
  
  const plt_data = useAppSelector(plotlyData)
  const SideBarParams = useAppSelector(SideBarParam)
  const dispatch = useAppDispatch()
  const trace = new Candlestick([], [], [], [], [], 'test')
  const [obj, setObj] = useState(_.cloneDeep(trace.getCandlestick()))

  function modifyDeeplyNestedProperty(obj: any, propPath: string, newValue: any) {
    const objCopy = _.set(_.cloneDeep(obj), propPath, newValue)
    dispatch(deletePlotlyData(objCopy.name))
    dispatch(addPlotlyData(objCopy))
  }

  useEffect(() => {
    if (plt_data.data.length > 0) {
      setObj(_.cloneDeep(plt_data.data[SideBarParams.actualObjectIndex]))
    }
  }, [plt_data.data, SideBarParams.actualObjectIndex])

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
      const name = event.currentTarget.name 
      const value = event.currentTarget.value
      modifyDeeplyNestedProperty(obj, name, value)
  }

  function handleonClick(event: any) {
    const name = event.name
    const value = event.value
    
    let objCopy: any = { ...obj }
    objCopy[name] = value
    dispatch(deletePlotlyData(obj.name))
    dispatch(addPlotlyData(objCopy))
  }
  console.log(obj);
  
  return (
    <form style={{width: '100%'}}>
      <div className="card my-1">
        <div className="card-body">
          <div className="my-1">
            <label className="d-inline form-label fst-italic">Name  :</label>
            <input onChange={handleOnChange} type="text" className="form-control form-control-sm w-75 d-inline align-middle ms-2" aria-label="trace-name" aria-describedby="trace-name" value={obj['name']} name="name" />
          </div>
        </div>
      </div>
      <div className="card my-1">
        <div className="card-body">
          <label className="d-block form-label fst-italic">Visibility  :</label>
          <div className="my-1 text-center">
            <div className="form-check form-check-inline">
              <input onClick={() => {handleonClick({name: 'visible', value: true})}} className="form-check-input" type="radio" name="visible" id="inlineRadio1" checked={obj['visible']} />
              <label className="form-check-label" htmlFor="inlineRadio1">True</label>
            </div>
            <div className="form-check form-check-inline ms-2">
              <input onClick={() => {handleonClick({name: 'visible', value: false})}} className="form-check-input" type="radio" name="visible" id="inlineRadio2" checked={! obj['visible']}  />
              <label className="form-check-label" htmlFor="inlineRadio2">False</label>
            </div>
          </div>
        </div>
      </div>
      <div className="card my-1">
        <div className="card-body">
          <div className="my-1">
            <label htmlFor="customRange3" className="fst-italic form-label">Opacity :</label>
            <input onChange={handleOnChange} type="range" className="form-range" min={0} max={1} step={0.1} value={obj['opacity']} name="opacity" id="customRange3" />
          </div>
        </div>
      </div>
      <div className="card my-1">
        <div className="card-body">
          <div className="my-1">
            <label htmlFor="customRange3" className="fst-italic form-label">Increasing Fill Color :</label>
            <div className="input-color-container align-middle m-2">
              <input onChange={handleOnChange} id="input-color" className="input-color" value={obj['increasing']['fillcolor']} name="increasing.fillcolor" type="color" />
            </div>
          </div>
          <div className="my-1">
            <label htmlFor="customRange3" className="fst-italic form-label">Increasing Line Color :</label>
            <div className="input-color-container align-middle m-2">
              <input onChange={handleOnChange} id="input-color" className="input-color" value={obj['increasing']['line']['color']} name="increasing.line.color" type="color" />
            </div>
          </div>
          <div className="my-1">
            <label htmlFor="customRange3" className="fst-italic form-label">Increasing Fill Width :</label>
            <input onChange={handleOnChange} type="number" className="form-control form-control-sm w-25 d-inline align-middle ms-2" value={obj['increasing']['line']['width']} name="increasing.line.width" id="customRange3" />
          </div>
        </div>
      </div>
      <div className="card my-1">
        <div className="card-body">
          <div className="my-1">
            <label htmlFor="customRange3" className="fst-italic form-label">Decreasing Fill Color :</label>
            <div className="input-color-container align-middle m-2">
              <input onChange={handleOnChange} id="input-color" className="input-color" value={obj['decreasing']['fillcolor']} name="decreasing.fillcolor" type="color" />
            </div>
          </div>
          <div className="my-1">
            <label htmlFor="customRange3" className="fst-italic form-label">Decreasing Line Color :</label>
            <div className="input-color-container align-middle m-2">
              <input onChange={handleOnChange} id="input-color" className="input-color" value={obj['decreasing']['line']['color']} name="decreasing.line.color" type="color" />
            </div>
          </div>
          <div className="my-1">
            <label htmlFor="customRange3" className="fst-italic fs-6 form-label">Decreasing Fill Width :</label>
            <input onChange={handleOnChange} type="number" className="form-control form-control-sm w-25 d-inline align-middle ms-2" value={obj['decreasing']['line']['width']} name="decreasing.line.width" id="customRange3" />
          </div>
        </div>
      </div>
    </form>
  )
}
