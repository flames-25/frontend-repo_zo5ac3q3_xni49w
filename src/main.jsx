import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Projecten from './pages/Projecten'
import Bureau from './pages/Bureau'
import Nieuws from './pages/Nieuws'
import Contact from './pages/Contact'
import Test from './Test'

function AppShell() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projecten" element={<Projecten />} />
        <Route path="/bureau" element={<Bureau />} />
        <Route path="/nieuws" element={<Nieuws />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  </React.StrictMode>,
)
