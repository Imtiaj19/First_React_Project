import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()

  // useRef hook 
  const passRef = useRef(null)
  const passwordGenereator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""
    if(numberAllowed)
      str += "0123456789"
    if(charAllowed)
      str += "!@#$^*-s"

    for(let i =1; i<=length; i++){
      let position = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(position)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  },
   [password])
  useEffect( () => {
    passwordGenereator()
  }, 
  [length, numberAllowed, charAllowed, passwordGenereator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 text-orange-500 bg-green-800'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg 
    overflow-hidden mb-4'>
      <input
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder="Password"
        ref = {passRef}
        readOnly
      />
      <button onClick={copyPasswordToClipboard} className='outline-none bg-pink-700 
      text-white px-3 py-0.5 shrink-0'>copy
      </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type = "range"
        min = {8}
        max = {100}
        value = {length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
          type = "checkbox"
          defaultChecked = {numberAllowed}
          id = "numberInput"
          onChange={() =>{
            setNumberAllowed((prev) => !prev)
          }}
        /> 
       <label htmlFor="numberInput"> Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
        <input
          type = "checkbox"
          defaultChecked = {charAllowed}
          id = "characterInput"
          onChange={() =>{
            setCharAllowed((prev) => !prev)
          }}
        /> 
       <label htmlFor="characterInput"> Characters </label>
        </div>

    </div>
  </div>
  
  )
}

export default App
