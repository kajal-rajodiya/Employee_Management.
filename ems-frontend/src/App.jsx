import { useState } from 'react'
import './App.css'
import Helloworld from './Helloworld'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Helloworld></Helloworld>
    </>
  )
}

export default App
