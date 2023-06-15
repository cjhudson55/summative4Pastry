import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Cart = () => {

    const [continueShopping, setContinueShopping] = useState(false);
    const handleContinueShopping = () => {
        setContinueShopping(!clicked);
    }
    return (
        <>
            <button>
                <NavLink
                    to="/catering"
                    activeclassname="active"
                    onClick={handleContinueShopping}>Continue Shopping
                </NavLink>
            </button>
            <button>
                Pay Now
            </button>
        </>
    )
}

export default Cart