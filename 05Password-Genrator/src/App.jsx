import { useState,useCallback, useEffect,useRef} from 'react'


function App() {
  //Declare UseState
  const [length, setLength] = useState(6)
  const [numberAllowed,setNumber] = useState(false)
  const [charAllowed,setCharAllowed] = useState(true)
  const [Password,setPassword] = useState("")



  //useRef
  const passwordRef = useRef(null)

  // Method for Password Generator
  const passwordGenrator = useCallback(()=>{
    let pass = ""
    let str = "ABCDFGHIJKLMNOPQRSTUVXYZabcedfghijklmnopqrstuvxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_~[]"

    for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random()*str.length+1)
        pass += str.charAt(char)
      
    }
    setPassword(pass)


  },[length,numberAllowed,charAllowed,setPassword])

  //Method for copy the password from inputfield to clipboard 
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,Password.length
      )
    window.navigator.clipboard.writeText(Password)
  },[Password])


  // UseEffect for re-render if not used get error(limit reached)
    useEffect(()=>{
      passwordGenrator()
    },[length,numberAllowed,charAllowed,passwordGenrator])
  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 '>
          {/* title */}
          <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
           
            {/* password field */}
          <input type='text' value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          ref={passwordRef}
          readOnly
          />
         
          {/* Copy button */}
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ml-2 rounded-lg' 
          >Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}/>
              <label >Length:{length}</label>
            </div>

            {/* check feild for Number */}
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={()=>{
                setNumber((prev)=> !prev);
              }} />
              <label htmlFor="">Numbers</label>
            </div>
              {/* Check feild for Character */}
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={charAllowed}
              id='CharInput'
              onChange={()=>{
                setCharAllowed((prev)=> !prev);
              }} />
              <label htmlFor="">Characters</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
