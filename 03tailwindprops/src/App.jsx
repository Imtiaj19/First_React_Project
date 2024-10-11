import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Imtiaj",
    age:21
  }
  let ARRay = [1, 2, 4, 5]
  return (
    <>
       <h1 className="bg-green-400 text-black p-4 rounded-xl">
      Hello world!
      </h1>
      <Card userName = "Bismillah"/> 
      <Card/>
    </>
  )
}

export default App
