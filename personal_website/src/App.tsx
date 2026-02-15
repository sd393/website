import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import './components/home.css'
import Notes from './components/notes'
import NotePost from './components/notePost'
import Navbar from './components/navbar'
import './components/navbar.css'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/notes/:slug" element={<NotePost/>} />
      </Routes>
    </>
  )
}

export default App
