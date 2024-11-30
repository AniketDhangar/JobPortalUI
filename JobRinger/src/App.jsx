import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Hero from './Component/Hero'
import Login from './Component/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Label from './Component/Label'
import Footer from './Component/Footer'

function App() {

  return (
    <Router>

      <Header />
    <Label/>
      <Hero />
     <Footer/>
    </Router>
  )
}

export default App
