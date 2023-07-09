import Header from '../header'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from "react-bootstrap";


import React from 'react'
import Profile from './profile';
import Hero from './hero';
import Gaminglibrary from './Gaminglibrary';
import Cardssection from './Cardssection';
import Questions from './Questions';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <div className='container'>
                <Profile />
                <Hero />
                <Gaminglibrary />

                {/* <Testimonials /> */ }

            </div >
            <Cardssection />
            <div className='container'>
                <Questions />
            </div >


            <Footer />









        </>
    )
}

export default Home
