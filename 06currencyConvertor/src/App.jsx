import { useState } from 'react'

import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {

  //Different useState 
  const[amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)

  //bind currencyinfo of from value like('usd','inr'....etc)
  const CurrencyInfo = useCurrencyInfo(from)
 
  //retrive only keys from currency info
  const option = Object.keys(CurrencyInfo)
  
  // Perform swap operation (change From to TO && To to From)
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  //function to convert currency
const convert = ()=>{
  setConvertedAmount(amount* CurrencyInfo[to])
}



return (
  <div
 
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      // Add Background Image

      style={{
          backgroundImage: `url('https://imgs.search.brave.com/VMENqFOGi8um5js5ug3LOn1sqwlscEG7SSymmQaVIGU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8x/MC8yMy8xMC8xMC9k/b2xsYXJzLTQ5OTQ4/MV82NDAuanBn')`
     

      }}
  >
  
      <div className="w-full">
          <div className="w-full flex  flex-wrap max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30"
         
         
          >
          {/* form of currencyConvertor */}
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     convert()
                  }}
              >
                {/* from input field */}
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOption={option}
                          onAmountChange={(amount)=>setAmount(amount)}
                          oncurrencyChange={(currency)=> setFrom(currency)}
                          selectCurrency={from}
                      />
                  </div>
                  {/* swap button */}
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  {/* To input feild */}
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                         label="To"
                         amount={convertedAmount}
                         currencyOption={option}
                         oncurrencyChange={(currency)=>setTo(currency)}
                         selectCurrency={to}
                         amountDisable
                                              
                      />
                  </div>
                  {/* convert into button */}
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase() }  to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
