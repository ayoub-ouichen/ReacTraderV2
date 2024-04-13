import { configureStore } from '@reduxjs/toolkit'
import priceSlice from './features/price/priceSlice'
import indicatorSlice from './features/indicator/indicatorSlice'
// ...

const store = configureStore({
  reducer: {
    price: priceSlice,
    indicator: indicatorSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store