import {useState} from 'react'
import './App.css'

function App() {
let [counter,setCounter] = useState(0);
const addvalue = ()=>{
  if(counter>=20){
    return
  }
  else{
  setCounter(counter+1);
  setCounter(counter+1);
  setCounter(counter+1);
  setCounter(counter+1);
}
}
const decValue = ()=>{
  if(counter<=0){
    return
  }
  else{
  setCounter(counter-1);
}
}
  return (
    <>
     <h1>Learning React</h1>
    <h2>Counter Value:{counter}</h2>

    <button onClick={addvalue}>Increment</button>
    <br/>
    <button onClick={decValue}>Decrement</button>
    </>
  )
}

export default App
