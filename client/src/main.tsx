import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav/>
      <App />
    <Footer/>
  </React.StrictMode>,
)
