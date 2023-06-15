import React, { useState } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Links from './Links'
import Footer from './components/Footer'

function App() {

  return (
    <HashRouter>
      <Navbar />
      <Links />
      <Footer />
    </HashRouter>
  )
}

export default App
