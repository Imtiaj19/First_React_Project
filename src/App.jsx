import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  let counter = 5
const [counter, setCounter] = useState(15)
 const addValue = ()=>{
  setCounter(counter<20?counter+1: counter)
  console.log("value added", counter)
 }
 const decreaseValue = ()=>{
  setCounter(counter > 0? counter - 1: counter)
  console.log("Decrease Value", counter)
 }
  return (
    <>
      <h1>Hello Hunny Bunny</h1>
      <h2>Counter value : {counter}</h2>
      <button 
      onClick={addValue}>
        Increment value: {counter}</button>
      <br/>
      <button onClick={decreaseValue}
      >Decrement value : {counter}</button>
    </>
  )
}

export default App
