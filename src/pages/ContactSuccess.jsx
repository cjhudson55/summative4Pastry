import React, { useState } from 'react'
import "./ContactSuccess.css"
import Contact from './Contact'
import { NavLink } from 'react-router-dom';

const ContactSuccess = () => {

    const [clickAnywhere, setClickAnywhere] = useState(false);
    const handleClickAnywhere = () => {
        setClickAnywhere(!clicked);
    }

    return (

        <>


            <div className='center-content'>
                {/* want the who;e page to be clickable and take user back to contact page */}
                <NavLink
                    to="/contact"
                    style={{ textDecoration: 'none' }}
                    activeclassname="active"
                    onClick={handleClickAnywhere}>
                    <div className='success-button'>
                        <h1>
                            Success
                        </h1>
                    </div>
                    <div className='success-message'>
                        <p>
                            Your message has been
                            <br></br>
                            successfully received.
                            <br></br>
                            <br></br>
                            We will be in touch shortly.
                        </p>
                    </div>
                </NavLink>
            </div>



        </>
    )
}

export default ContactSuccess