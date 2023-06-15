import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'
import "../App.css"
import "./AddToCart.css"

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const AddToCart = () => {

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    const [updateCart, setUpdateCart] = useState(false);
    const handleUpdateCart = () => {
        setUpdateCart(!updateCart);
    }

    const [continueShopping, setContinueShopping] = useState(false);
    const handleContinueShopping = () => {
        setContinueShopping(!continueShopping);
    }


    const endpoint = `${baseUrl}/catering/${id}?_embed`;

    useEffect(() => {
        axios.get(`${endpoint}`)
            .then((res) => {
                console.log(res.data);
                setPost(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    function getFeaturedImage(post) {
        // if theres a post and that post has embedded data and the embedded data has an arry ...
        if (post && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url) {
            return post._embedded['wp:featuredmedia'][0].source_url;
        } else {
            return 'https://via.placeholder.com/150'
        }
    }

    if (loading) {
        return <>
            <div className='loader-container'>
                <div className="lds-grid">
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                </div>
            </div>
        </>
    }


    return (
        <>
            <div>
                <div key={post.slug} className="selected-option">
                    <div>
                        <img src={getFeaturedImage(post)} alt='Post featured image' className='featured-image-single-item' />
                    </div>
                    <div className='ml-2 mt-2'>
                        <h2 className="title">{post.acf.category_title}</h2><br></br>
                        <p>{post.acf.category_desc_long}</p><br></br>
                        <p>{post.acf.category_desc_content}</p><br></br>
                        <p>Caters for {post.acf.category_caters_for_num} people</p><br></br>
                        <p>Total cost ${post.acf.category_price}.00</p><br></br>
                        <div className='selected-option-buttons'>
                            <button>
                                <NavLink
                                    to="/catering"
                                    activeclassname="active"
                                    onClick={handleContinueShopping}>Continue Shopping
                                </NavLink>
                            </button>
                            <button className='ml-2 add-to-cart'>
                                <NavLink
                                    to="/itemadded"
                                    activeclassname="active"
                                    onClick={handleUpdateCart}>Add To Cart
                                </NavLink>
                            </button>
                        </div>
                    </div>
                    <p className='space-above-footer'></p>
                </div>

            </div>
        </>

    )
}

export default AddToCart