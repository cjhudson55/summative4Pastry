import React, { useState } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Links from './Links'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Navbar />
      <Links />
    </HashRouter>
  )
}

export default App
