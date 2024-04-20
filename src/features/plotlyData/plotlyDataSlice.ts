import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

export interface PlotlyData {
  data: Array<any>,
  layout: object
}

interface paramRange {
  xRangeData: any,
  yRangeData: any
}

interface PlotlyLayout {
  [key: string]: any,
  xaxis: Record<string, any>,
  yaxis: Record<string, any>
}

let x_axis: Record<string, any> = {
  nticks: 10,
  type: 'category',
  //range: [0, 0],
  autorange: true,
  rangeslider: {
      visible: false
  }
}

let y_axis: Record<string, any> = {
  //range: [0, 0],
  autorange: true,
  side: 'right'
}

let layout: PlotlyLayout = {
  dragmode: 'pan',
  margin: {
  r: 60, 
  t: 60, 
  b: 60, 
  l: 60
  }, 
  showlegend: false, 
  xaxis: Object.assign({}, x_axis),
  yaxis: Object.assign({}, y_axis)
}

const initialState: PlotlyData = {
  data: [],
  layout: layout
}

// function rescalePlot() {
//     var startX = price.x.length - parseInt(price.params.period)
//     var endX = price.x.length - 1
//     var highArray = [0]
//     var lowArray = [0]
//     var endY = 0
//     var startY = 0
//     highArray = data[0] ? data[0].high : []
//     lowArray = data[0] ? data[0].low : []
//     endY = Math.max(...highArray.slice(startX, endX))
//     startY = Math.min(...lowArray.slice(startX, endX))
//     setRangeY([startY, endY])
//     setRangeX([startX, endX + 10])
// }

export const PlotlyDataSlice = createSlice({
  name: 'PlotlyData',
  initialState,
  reducers: {
    addPlotlyData: (state, action: PayloadAction<object>) => {
      state.data.push(action.payload)
    },
    deletePlotlyData: (state, action: PayloadAction<string>) => {
      // Find index of object
      const indexToDelete = state.data.findIndex(obj => obj.name === action.payload);

      // Delete object from the array
      if (indexToDelete !== -1) {
        state.data.splice(indexToDelete, 1);
      }
    },
    getPlotlyTrace: (state, action: PayloadAction<string>): any => {
      const trace = state.data.filter(obj => obj.name === action.payload)
      return trace 
    },
    setPlotlyLayout: (state, action: PayloadAction<paramRange>) => {
      let layoutCopy: PlotlyLayout = {
        dragmode: 'pan',
        margin: {
        r: 60, 
        t: 60, 
        b: 60, 
        l: 60
        }, 
        showlegend: false, 
        xaxis: Object.assign({}, x_axis),
        yaxis: Object.assign({}, y_axis)
      }
      
      layoutCopy.xaxis.autorange = false
      layoutCopy.yaxis.autorange = false
      layoutCopy.xaxis.range = action.payload.xRangeData
      layoutCopy.yaxis.range = action.payload.yRangeData
      
      if((action.payload.xRangeData).length === 0 || (action.payload.yRangeData).length === 0 ){
        layoutCopy.xaxis.autorange = true
        layoutCopy.yaxis.autorange = true
        delete layoutCopy.xaxis.range
        delete layoutCopy.yaxis.range
      }
      state.layout = layoutCopy 
    }
  }
})

export const { addPlotlyData, deletePlotlyData, setPlotlyLayout } = PlotlyDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const plotlyData = (state: RootState) => state.plotlyData

export default PlotlyDataSlice.reducer
