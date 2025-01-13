import React from 'react'
import { useSelector } from 'react-redux'
import { counterSelector } from '../../store/selector/counterSelector'
import { counterSlice } from './CounterSlice'
import { useAppDispatch } from '../../store/store'
import { Button } from '../../components/ui/button'

export const Counter = () => {
  const count = useSelector(counterSelector)
  const dispatch = useAppDispatch()

  const addHandler = React.useCallback(() => {
    dispatch(counterSlice.actions.add({ number: 1 }))
  }, [count])

  return (
    <div>
      <p>This sample uses Redux and RTK to manage state.</p>
      <div>{count}</div>
      <Button onClick={addHandler}>add</Button>
    </div>
  )
}