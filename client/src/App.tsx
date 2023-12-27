import React from 'react'
import { BrowserRouter, Router, Switch, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Temp from './pages/Temp'

function App() {
  return (
   <BrowserRouter>
   <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/temp" element={<Temp />} />
      
    </Routes>
   </main>
   </BrowserRouter>
      
    
  )
}

export default App