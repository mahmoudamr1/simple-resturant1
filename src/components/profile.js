import Gaminglibrary from "./Gaminglibrary"
import "./Profile.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'

const Profile = () => {
    return (
        <>
            <div className="Row">
                <div className='col-md-6  col-lg-6 ' id="profile">
                    <h1> Good food choices are good investments.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                    <button id='btn1'>ORDER NOW</button>
                    <button id='btn2'>View More</button>


                </div>

                <div className='col-md-6 col-lg-6 ' >

                </div>
            </div>
        </>
    )
}

export default Profile
