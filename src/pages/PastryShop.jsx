import React, { useState } from 'react'
// import "../App.css"
import "./PastryShop.css"
import shopimage from '../../public/assets/flur-exterior.png'
import streetmap from '../../public/assets/map.png'
import { NavLink } from 'react-router-dom'


const PastryShop = () => {
    const [sendMessage, setSendMessage] = useState(false);
    const handleSendMessage = () => {
        setSendMessage(!sendMessage);
    }

    return (
        <>
            <h1 className='page-heading center-form'>flur Pastry Shop</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-width'>
                        <img src={shopimage} className='shop-img'></img>

                    </div>
                    <div className='col-width shop-info'>
                        <p>Located in the heart of Wellington’s vibrant Cuba Street, flur offers a range of sweet and savoury delights.<br></br><br></br>Cordon Bleu trained pastry chef Sarah Mackenzie wows locals daily with an ever-changing selction of pastries, tarts and delicate sandwiches, with a delicious Supreme coffee to wash it all down with. <br></br><br></br>And as you can see, there is something for everyone!</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-width shop-info'>
                        <p><strong>Tuesday - Saturday</strong><br></br>7:30am until sold out<br></br><br></br><strong>321 Cuba Street</strong><br></br>Te Aro<br></br>Wellington<br></br><br></br>info@flurpastries.com<br></br>P 021 321 123</p><br></br>
                    </div>
                    <div className='col-width'>
                        <img src={streetmap} className='shop-img'></img>
                    </div>
                </div>
            </div>
            <button className='pastry-button'>
                <NavLink
                    to="/contact"
                    activeclassname="active"
                    onClick={handleSendMessage}>Drop us a line
                </NavLink>
            </button>
            <p className='space-above-footer'></p>
        </>
    )
}

export default PastryShop