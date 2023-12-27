import React from 'react'
import { BrowserRouter, Router, Switch, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Register from './pages/Register'

function App() {
  return (
   <BrowserRouter>
   <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/siginin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      
    </Routes>
   </main>
   </BrowserRouter>
      
    
  )
}

export default App