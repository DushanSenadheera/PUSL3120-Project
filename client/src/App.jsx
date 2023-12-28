import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

function App() {
  return (
   <div>
    <Nav />
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
   <Footer />
   </div>
  )
}

export default App