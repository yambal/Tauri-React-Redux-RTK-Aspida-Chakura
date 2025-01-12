import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { setupListeners } from '@reduxjs/toolkit/query'
import { createRootReducer } from './reducer'

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = createRootReducer()

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
    //  .concat(weatherQueries.middleware)
    //  .concat(newsQueries.middleware),
})

/**
 * refetchOnMount とrefetchOnReconnect動作に使用されるユーティリティ。
 */
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()