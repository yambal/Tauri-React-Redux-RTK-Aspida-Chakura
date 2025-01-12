import { combineReducers } from 'redux'
// import { connectRouter } from 'connected-react-router'
// import { History } from 'history'

import { counterSlice } from '../features/counter/CounterSlice'
import { weatherQueries } from './queries/weatherQuery'


export const createRootReducer = () => {
  return combineReducers({
    [counterSlice.name]: counterSlice.reducer,
    [weatherQueries.reducerPath]: weatherQueries.reducer,
  })
}