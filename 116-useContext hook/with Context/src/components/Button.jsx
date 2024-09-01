import React ,{useContext} from 'react'
import Component1 from './Component1'
import { CounterContext } from '../context/context'

const Button = () => {
  const value = useContext(CounterContext)
  return (
    <>
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>I am a button <Component1 /></button>
    </div>
    </>
  )
}

export default Button
