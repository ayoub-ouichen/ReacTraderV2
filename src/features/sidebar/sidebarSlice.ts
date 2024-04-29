import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface SideBarParamState {
  tab: number,
  actualObjectIndex: number
} 

const initialState: SideBarParamState = {
  tab: 1,
  actualObjectIndex: 0
}

export const SideBarParamSlice = createSlice({
  name: 'SideBarParam',
  initialState,
  reducers: {
    setTabNumber: (state, action: PayloadAction<number>) => {
      state.tab = action.payload
    },
    setObjectIndex: (state, action: PayloadAction<SideBarParamState>) => {
      state.tab = action.payload.tab
      state.actualObjectIndex = action.payload.actualObjectIndex
    },
  }
})

export const { setTabNumber, setObjectIndex } = SideBarParamSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const SideBarParam = (state: RootState) => state.SideBarParam

export default SideBarParamSlice.reducer