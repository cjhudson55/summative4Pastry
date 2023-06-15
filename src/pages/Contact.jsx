import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ContactSuccess from './contactsuccess'
import "../App.css"
import "./Contact.css"

const Contact = () => {

    const [sendMessage, setSendMessage] = useState(false);
    const handleSendMessage = () => {
        setSendMessage(!sendMessage);
    }

    return (
        <>
            <div className='center-form'>
                <h1 className='page-heading'>Drop us a line</h1>
                <p className='mobile-padding'>For any enquiries about the cafe or catering service, or just want to get in touch</p>
                <form>
                    <label htmlFor="name" className="form-label">Name</label><br></br>
                    <input type="text" id="name" className='form-styling'></input><br></br>
                    <label htmlFor="email" className="form-label">Email</label><br></br>
                    <input type="email" id="email" className='form-styling'></input><br></br>
                    <label htmlFor="message" className="form-label">Message</label><br></br>
                    <textarea id="message" className='form-styling'></textarea><br></br>
                </form>

                <button>
                    <NavLink
                        to="/contactsuccess"
                        activeclassname="active"
                        onClick={handleSendMessage}>Send Message
                    </NavLink>
                </button>
                <p className='space-above-footer'></p>
            </div>
        </>
    )
}

export default Contact