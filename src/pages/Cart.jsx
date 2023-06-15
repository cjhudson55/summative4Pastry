import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Cart.css"

const Cart = () => {

    const [continueShopping, setContinueShopping] = useState(false);
    const handleContinueShopping = () => {
        setContinueShopping(!continueShopping);
    }
    return (
        <>
            <div className='center-buttons'>
                <h2>Cart is not available yet</h2>
                <p className='mt-2'>Please continue shopping</p>
                <button className='mt-2'>
                    <NavLink
                        to="/catering"
                        activeclassname="active"
                        onClick={handleContinueShopping}>Continue Shopping
                    </NavLink>
                </button>
                <button className='mt-2'>
                    Pay Now
                </button>

            </div>
        </>
    )
}

export default Cart