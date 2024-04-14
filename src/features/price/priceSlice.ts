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
} 

export interface PriceState {
  x: Array<any>
  high: Array<number>
  close: Array<number>
  open: Array<number>
  low: Array<number>
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
  period: 'all'
}

const initialState: PriceState = {
  x: [],
  close: [],
  high: [],
  low: [],
  open: [],
  loading: 'idle',
  error: null,
  params: params
}


export const fetchPrice = createAsyncThunk(
  'org/getPrice',
  async (params: Params) => {
    const response = await axios.post<any>(URL + 'org/getPrice', params)
    return response.data
  }
);

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setParams: (state, action: PayloadAction<Params>) => {
      state.params.from_date = action.payload.from_date
      state.params.to_date = action.payload.to_date
      state.params.time_frame = action.payload.time_frame
      state.params.symbol = action.payload.symbol
      state.params.mode = action.payload.mode
      state.params.period = action.payload.period
    },
    setLoading: (state, action: PayloadAction<'idle' | 'pending' | 'succeeded' | 'failed'>) => {
      state.loading = action.payload
    } 
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPrice.pending, state => {
        state.loading = 'pending';
      })
      .addCase(fetchPrice.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.x = action.payload.x
        state.high = action.payload.high
        state.close = action.payload.close
        state.open = action.payload.open
        state.low = action.payload.low
      })
      .addCase(fetchPrice.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  }
})

export const { setParams, setLoading } = priceSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const priceData = (state: RootState) => state.price

export default priceSlice.reducer