import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import axios from 'axios'

const URL = 'http://localhost:2010/'

interface Params {
  from_date: string
  to_date: string
  time_frame: string
  symbol: string
  mode: string
  period: string
  unit: number
} 

export interface SMAState {
  x: Array<any>
  y: Array<number>
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
  params: Params
}

const params = {
  from_date: '2000-01-01',
  to_date: '2025-01-01',
  time_frame: 'D1',
  symbol: 'GBPJPY',
  mode: 'candlestick',
  period: '200',
  unit: 20
}

const initialState: SMAState = {
  x: [],
  y: [],
  loading: 'idle',
  error: null,
  params: params
}

export const fetchSMA = createAsyncThunk(
  'org/getSMA',
  async (params: Params) => {
    const response = await axios.post<any>(URL + 'org/getSMA', params)
    return response.data
  }
);

export const SMA_Slice = createSlice({
  name: 'SMA',
  initialState,
  reducers: {
    setParamsSMA: (state, action: PayloadAction<Params>) => {
      state.params.from_date = action.payload.from_date
      state.params.to_date = action.payload.to_date
      state.params.time_frame = action.payload.time_frame
      state.params.symbol = action.payload.symbol
      state.params.mode = action.payload.mode
      state.params.period = action.payload.period
      state.params.unit = action.payload.unit
    },
    setLoadingSMA: (state, action: PayloadAction<'idle' | 'pending' | 'succeeded' | 'failed'>) => {
      state.loading = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSMA.pending, state => {
        state.loading = 'pending';
      })
      .addCase(fetchSMA.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.x = action.payload.x
        state.y = action.payload.y
      })
      .addCase(fetchSMA.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  }
})

export const { setParamsSMA, setLoadingSMA } = SMA_Slice.actions

// Other code such as selectors can use the imported `RootState` type
export const SMAData = (state: RootState) => state.sma

export default SMA_Slice.reducer