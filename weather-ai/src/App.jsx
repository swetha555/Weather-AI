import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h3>Welcome to my weather App Powered by AI</h3>
        <h1 class="title">Weather Wizard.</h1>
      </div>
    </>
  )
}

export default App
