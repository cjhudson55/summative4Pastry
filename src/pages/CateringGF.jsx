import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../App.css"
import "./Catering.css"
import parse from 'html-react-parser'
import { NavLink } from 'react-router-dom'
import Catering from './Catering'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const CateringGF = () => {

    const [showVegan, setShowVegan] = useState(false);
    const handleShowVegan = () => {
        setShowVegan(!showVegan);
    }

    const [showGF, setShowGF] = useState(false);
    const handleShowGF = () => {
        setShowGF(!showGF);
    }

    const [posts, setPosts] = useState([]);

    const [loading, setLoading] = useState(true)

    const endpoint = `${baseUrl}/catering?_embed`;

    // perform axios call to get all the post of type 'catering'
    useEffect(() => {
        axios.get(`${endpoint}`)
            .then((res) => {
                console.log(res.data);
                setPosts(res.data)
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

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

    // ******* Render the posts to the catering page *******

    // Finger Foods
    const FFPosts = ({ posts }) => {

        const mappedPosts = posts.map((post, index) => {

            const dietaryRequirement = post.dietary_requirement;
            const blank = "<p className='blank'></p>"
            const vegan = "<p className='vegan'></p>";
            const glutenfree = "<p className='gluten-free'></p>";
            let dietString = blank;

            for (let i = 0; i < dietaryRequirement.length; i++) {
                if (dietaryRequirement[i] == 4) {
                    dietString += vegan;
                }
                if (dietaryRequirement[i] == 5) {
                    dietString += glutenfree;
                }
            }

            if (post.acf.category_type === 'fingerfood' && dietaryRequirement.includes(5)) {
                function getFeaturedImage(post) {
                    if (post && post._embedded && post._embedded['wp:featuredmedia'] &&
                        post._embedded['wp:featuredmedia'][0]) {
                        return post._embedded['wp:featuredmedia'][0].source_url;
                    } else {
                        console.log('failure');
                        return 'https://via.placeholder.com/150';
                    }
                }

                return (
                    <div key={post.slug + "-" + index} className='indiv-item'>
                        <h4 className="title py-1">{post.acf.category_title}</h4>
                        <img src={getFeaturedImage(post)} alt="Post featured image" className='featured-image' />
                        <div className='d-flex-wrap dietary-styling'>
                            {parse(dietString)}
                        </div>
                        <p className="title py-1">{post.acf.category_desc_short}</p>
                        <button className='button-small'>
                            <a href={`#/addtocart/${post.id}`}>Details</a>
                        </button>
                    </div>
                )
            }
        })
        return (
            <>
                {mappedPosts}
            </>
        )
    }

    // High Tea
    const HTPosts = ({ posts }) => {

        const mappedPosts = posts.map((post, index) => {

            const dietaryRequirement = post.dietary_requirement;
            const blank = "<p className='blank'></p>"
            const vegan = "<p className='vegan'></p>";
            const glutenfree = "<p className='gluten-free'></p>";
            let dietString = blank;

            for (let i = 0; i < dietaryRequirement.length; i++) {
                if (dietaryRequirement[i] == 4) {
                    dietString += vegan;
                }
                if (dietaryRequirement[i] == 5) {
                    dietString += glutenfree;
                }
            }

            if (post.acf.category_type === 'hightea' && dietaryRequirement.includes(5)) {
                function getFeaturedImage(post) {
                    if (post && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
                        console.log('success');
                        return post._embedded['wp:featuredmedia'][0].source_url;
                    } else {
                        console.log('failure');
                        return 'https://via.placeholder.com/150';
                    }
                }
                return (
                    <div key={post.slug + "-" + index} className='indiv-item'>
                        <h4 className="title py-1">{post.acf.category_title}</h4>
                        <img src={getFeaturedImage(post)} alt="Post featured image" className='featured-image' />
                        <div className='d-flex-wrap dietary-styling'>
                            {parse(dietString)}
                        </div>
                        <p className="title py-1">{post.acf.category_desc_short}</p>
                        <button className='button-small'>
                            <a href={`#/addtocart/${post.id}`}>Details</a>
                        </button>
                    </div>
                )
            }
        })
        return (
            <>
                {mappedPosts}
            </>
        )
    }

    // Cakes
    const CakePosts = ({ posts }) => {

        const mappedPosts = posts.map((post, index) => {

            const dietaryRequirement = post.dietary_requirement;
            const blank = "<p className='blank'></p>"
            const vegan = "<p className='vegan'></p>";
            const glutenfree = "<p className='gluten-free'></p>";
            let dietString = blank;

            for (let i = 0; i < dietaryRequirement.length; i++) {
                if (dietaryRequirement[i] == 4) {
                    dietString += vegan;
                }
                if (dietaryRequirement[i] == 5) {
                    dietString += glutenfree;
                }
            }

            if (post.acf.category_type === 'cakes' && dietaryRequirement.includes(5)) {
                function getFeaturedImage(post) {
                    if (post && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
                        console.log('success');
                        return post._embedded['wp:featuredmedia'][0].source_url;
                    } else {
                        console.log('failure');
                        return 'https://via.placeholder.com/150';
                    }
                }
                return (
                    <div key={post.slug + "-" + index} className='indiv-item'>
                        <h4 className="title py-1">{post.acf.category_title}</h4>
                        <img src={getFeaturedImage(post)} alt="Post featured image" className='featured-image' />
                        <div className='d-flex-wrap dietary-styling'>
                            {parse(dietString)}
                        </div>

                        <p className="title py-1">{post.acf.category_desc_short}</p>
                        <button className='button-small'>
                            <a href={`#/addtocart/${post.id}`}>Details</a>
                        </button>
                    </div>
                )
            }
        })

        return (
            <>
                {mappedPosts}
            </>
        )
    }

    return (
        <>
            <h1 className='page-heading center-form'>Catering at flur</h1>
            <div className='d-flex-wrap dietary-styling-center'>
                <button className='dietary-button'>
                    <NavLink
                        to="/cateringvegan"
                        activeclassname="active"
                        onClick={handleShowVegan}>Vegan
                    </NavLink>
                </button>
                <p className='vegan'></p>
                <button className='dietary-button ml-2'>
                    <NavLink
                        to="/cateringgf"
                        activeclassname="active"
                        onClick={handleShowGF}>Gluten Free
                    </NavLink>
                </button>
                <p className='gluten-free'></p>
            </div>

            <h2 className='page-sub-heading'>Finger Food</h2>
            <div className='d-flex-wrap'>
                <FFPosts posts={posts} />
            </div>
            <p></p>
            <h2 className='page-sub-heading'>High Tea</h2>
            <div className='d-flex-wrap'>
                <HTPosts posts={posts} />
            </div>
            <p></p>
            <h2 className='page-sub-heading'>Cakes</h2>
            <div className='d-flex-wrap'>
                <CakePosts posts={posts} />
            </div>
            <p className='space-above-footer'></p>
        </>
    )
}

// ******* End of render the posts to the catering page *******


export default CateringGF