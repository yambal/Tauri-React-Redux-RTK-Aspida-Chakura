import { combineReducers } from 'redux'
// import { connectRouter } from 'connected-react-router'
// import { History } from 'history'

import { counterSlice } from '../features/counter/CounterSlice'


export const createRootReducer = () => {
  return combineReducers({
    [counterSlice.name]: counterSlice.reducer,
  })
}