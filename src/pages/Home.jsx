import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./Home.css"
import { Helmet } from 'react-helmet';

const Home = () => {

    const [orderNow, setOrderNow] = useState(false);
    const handleOrderNow = () => {
        setOrderNow(!orderNow);
    }
    return (
        <>
            <Helmet>
                <title>Flur Pastry Shop - Summative 4</title>
                <meta name="description" content="Flur Pastry Shop and Catering Service" />
                <meta name="keywords" content="catering, functions, pastry shop, patisserie" />
            </Helmet>
            <div className='home-styling'>
                <img src="./src/assets/img1.png"></img>
            </div>
            <div className='home-welcome'>
                <div className='home-title'>
                    <h1>flur</h1>
                </div>
                <div className='home-message'>
                    <h4>Where flavour comes first</h4>
                </div>
            </div>
            <div className='home-button'>
                <button>
                    <NavLink
                        to="/catering"
                        activeclassname="active"
                        onClick={handleOrderNow}>Order Now
                    </NavLink>
                </button>

            </div>
            <p className='space-above-footer'></p>


        </>
    )
}

export default Home