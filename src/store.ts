import { configureStore } from '@reduxjs/toolkit'
import priceSlice from './features/price/priceSlice'
import SMA_Slice from './features/indicators/SMA_Slice'
import PlotlyDataSlice from './features/plotlyData/plotlyDataSlice'
// ...

const store = configureStore({
  reducer: {
    price: priceSlice,
    sma: SMA_Slice,
    plotlyData: PlotlyDataSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: {
        ignoredPaths: ["plotlyData"]
      }
    })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store