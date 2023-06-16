import React from 'react'
import footerlogo from '../../public/assets/logo1.png'

import "./Footer.css"

const Footer = () => {
    return (

        <>
            <div className='footer-styles'>
                <div className='col-3'>
                    <p>P: 021 333 333</p>
                    <p>E: info@flurpastries.com</p>
                </div>
                <div className='col-3 align-center'>
                    <img src={footerlogo} className='logo-img-footer'></img>

                </div>
                <div className='col-3 align-right'>
                    <i className="fa-brands fa-instagram insta-custom"></i>
                </div>
            </div>
        </>
    )
}

export default Footer