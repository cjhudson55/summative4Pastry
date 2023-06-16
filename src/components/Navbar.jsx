import React from 'react'
import { useState } from 'react'
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import navbarlogo from '../../public/assets/logo.png'

import "./NavbarStyles.css"

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
                {/* Logo - click on log anywhere and will take you back home */}
                <a href="index.html">
                    <img src={navbarlogo} className='logo-img'></img>
                </a>
                {/* Create the nav links */}
                <div>
                    <ul id="navbar" className={clicked ? "#navbar" : "#navbar active"}>
                        <li>
                            <NavLink
                                to="/"
                                activeclassname="active"
                                onClick={handleClick}>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/pastryshop"
                                activeclassname="active"
                                onClick={handleClick}>Pastry Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/catering"
                                activeclassname="active"
                                onClick={handleClick}>Catering
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                activeclassname="active"
                                onClick={handleClick}>Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/cart"
                                activeclassname="active"
                                onClick={handleClick}><i className="fas fa-sharp fa-regular fa-cart-shopping"></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* Handle Mobile */}
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