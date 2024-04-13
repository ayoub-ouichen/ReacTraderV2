import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import axios from 'axios'

const URL = 'http://localhost:2010/'

interface Params {
  from_date: string
  to_date: string
  time_frame: string
  symbol: string
} 

export interface PriceState {
  x: Array<any>
  high: Array<number>
  close: Array<number>
  open: Array<number>
  low: Array<number>
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: PriceState = {
  x: [],
  close: [],
  high: [],
  low: [],
  open: [],
  loading: 'idle',
  error: null
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
  reducers: {},
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

export const {  } = priceSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const priceData = (state: RootState) => state.price

export default priceSlice.reducer