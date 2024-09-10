import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,multiply,incrementByAmount } from './redux/counter/counterSlice'
function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <Navbar />
      <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
        currently count is {count}
        <button onClick={()=>dispatch(incrementByAmount(6))}>+6</button>
        <button onClick={()=>dispatch(multiply(6))}>*</button>
        <button onClick={()=>dispatch(increment(6))}>+</button>
      </div>
    </>
  )
}

export default App
