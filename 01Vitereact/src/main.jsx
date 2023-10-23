//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//custom elements
const reactElement = (
      <a href="google.com">Visit google</a>
)

const anotherElement =(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    anotherElement,//it call directly because it is a Object
    reactElement,
    <App/>
  
)
