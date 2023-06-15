import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PastryShop from './pages/PastryShop'
import Catering from './pages/Catering'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'


const Links = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/pastryshop' element={<PastryShop />}></Route>
            <Route path='/catering' element={<Catering />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    )
}

export default Links