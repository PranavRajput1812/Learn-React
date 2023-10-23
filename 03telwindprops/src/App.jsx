
import './App.css'
import Card from './component/card'
function App() {
  let myObj = {
    Uname : 'Pranav',
    age:21
  }
  let myArr =[1,2,5,6]

  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
    
    <Card userName= "Coder Pranav" sumobj = {myObj} sumobj2 = {myArr} btntext = "Hi i am Pranav"/>
    <Card userName='Pranav' />
    </>
  )
}

export default App
