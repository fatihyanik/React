import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    if(localStorage.count !== null){
      setCount(parseInt(localStorage.getItem('count')))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('count', count)
   },[count]);
  

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={()=> setCount(count+1)}>+</button>
      <button onClick={()=> setCount(count-1)}>-</button>
    </>
  )
}

export default App
