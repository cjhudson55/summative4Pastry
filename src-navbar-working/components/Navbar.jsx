import React from 'react'
import { useState } from 'react'
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import "./NavbarStyles.css"
// import Links from '../Links'

const Navbar = () => {

    // Need to set up a state for the click event on the hamburger
    // first intialise the state

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <>
            <nav>
                {/* Logo */}
                <a href="index.html">
                    <h1 className='logo'>HI</h1>
                </a>
                {/* Create the nav links */}
                <div>
                    <ul id="navbar" className={clicked ? "#navbar" : "#navbar active"}>
                        {/* <li><a href="/" className="active">Home</a></li>
                        <li><a href="/pastryshop">Pastry Shop</a></li>
                        <li><a href="/catering">Catering</a></li>
                        <li><a href="/contact">Contact</a></li> */}
                        <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                        <li><NavLink to="/pastryshop" activeclassname="active">Pastry Shop</NavLink></li>
                        <li><NavLink to="/catering" activeclassname="active">Catering</NavLink></li>
                        <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
                    </ul>
                </div>
                <div id="mobile">
                    <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}
                        onClick={handleClick}
                    ></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar