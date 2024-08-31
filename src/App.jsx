import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Features from './pages/Features'
import Testimonials from './pages/Testimonials'
import Pricing from './pages/Pricing'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
