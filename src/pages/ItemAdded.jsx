import React, { useState } from 'react'
import "./ContactSuccess.css"

import AddToCart from './AddToCart'
import { NavLink } from 'react-router-dom'


const ItemAdded = () => {

    const [clickAnywhere, setClickAnywhere] = useState(false);
    const handleClickAnywhere = () => {
        setClickAnywhere(!clickAnywhere);
    }

    return (
        <>
            <div className='center-content'>
                {/* want the who;e page to be clickable and take user back to contact page */}
                <NavLink
                    to="/catering"
                    style={{ textDecoration: 'none' }}
                    activeclassname="active"
                    onClick={handleClickAnywhere}>
                    <div className='success-button'>
                        <h1>
                            Added
                        </h1>
                    </div>
                    <div className='success-message'>
                        <p>
                            Thank you!
                        </p>
                    </div>
                </NavLink>
            </div>

        </>
    )
}

export default ItemAdded