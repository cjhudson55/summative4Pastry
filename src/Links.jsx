import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PastryShop from './pages/PastryShop'
import Catering from './pages/Catering'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import ContactSuccess from './pages/ContactSuccess'
import CateringVegan from './pages/CateringVegan'
import CateringGF from './pages/CateringGF'
import AddToCart from './pages/AddToCart'
import ItemAdded from './pages/ItemAdded'


const Links = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/pastryshop' element={<PastryShop />}></Route>
            <Route path='/catering' element={<Catering />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/contactsuccess' element={<ContactSuccess />}></Route>
            <Route path='/cateringvegan' element={<CateringVegan />}></Route>
            <Route path='/cateringgf' element={<CateringGF />}></Route>
            <Route path='/addtocart/:id' element={<AddToCart />}></Route>
            <Route path='/itemadded' element={<ItemAdded />}></Route>
        </Routes>
    )
}

export default Links