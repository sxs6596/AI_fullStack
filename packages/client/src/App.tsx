import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState(''); 
  useEffect(()=>{
    fetch('/api/hello')
    .then(res=>res.json)
    .then((res:any) => res.json())
    .then((data: any) => setMessage(data.message))
  })
  return (
     <div>
         <h2>{message}</h2>
     </div>
  )
}

export default App
