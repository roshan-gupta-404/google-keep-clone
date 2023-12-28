import { useState } from 'react'
import './App.css'
import Background from './assets/components/Background'
import Foreground from './assets/components/Foreground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative w-full h-screen bg-zinc-800'>
        <Background />
        <Foreground/>
      </div>
    </>
  )
}

export default App
