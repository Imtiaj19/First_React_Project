import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const increase = ()=>{
    setCount(count<20? count + 1: count)
    console.log("Increase", count)
  }
  const decrease = ()=>{
    setCount(count>0? count - 1: count)
    console.log("decrease", count)
  }
  return (
    <>
    <h2>Hi bro, We are going to learn usestates </h2>
    <h3>Here is the count : {count}</h3>
    <button onClick={increase}> Increment : {count} </button> 
    <br/>
    <button onClick={decrease}>Decrement: {count}</button>
    </>
  )
}

export default App
