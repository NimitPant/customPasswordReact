import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbers) str+="0123456789";
    if(symbols) str+="!@#$%^&*()_+";
    for(let i=0; i<length; i++){
      const index = Math.floor(Math.random()*str.length);
      pass+=str.charAt(index);
    }
    setPassword(pass);
  })

  useEffect(()=>{
    generatePassword();
  }, [length, numbers, symbols])

  return (
    <>
      <div >
        <h3>your password generator</h3>
        <div >
          <input type="text" for="" id="" value={password} placeholder='password' readOnly/>
          <button>Copy</button>
        </div>
        <div>
          <input 
            type="range"
            for="length"
            min={6} max={20}
            value={length}
            step="1"
            onChange={(e) =>{
              setlength(e.target.value);
              console.log(length);
            }}
          />
          <label name="length">Length</label>
          <input type="checkbox" for="numbers" defaultChecked={numbers}
            onChange={()=>{
              setNumbers((prev)=> !prev
              )
            }}
          />
          <label name="numbers">Numbers</label>
          <input type="checkbox" for="symbols" defaultChecked={symbols}
            onChange={()=>{
              setSymbols((prev)=> !prev
              )
            }}
          />
          <label name="symbols">Symbols</label>
        </div>
        <ol></ol>        
      </div>
    </>
  )
}
 
export default App
