import { useState } from 'react'
import './App.css'
import Home from './components/home'
import './components/home.css'
import Navbar from './components/navbar'
import './components/navbar.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Navbar/>
    </>
  )
}

export default App
