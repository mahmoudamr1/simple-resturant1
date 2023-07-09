import "./Gaminglibrary.css"
import img7 from '../images/beautiful-frost-pattern-window.jpg'
import img1 from '../images/image2.png'
import img2 from '../images/image3.png'
import img3 from '../images/vestrahorn-mountains-stokksnes-iceland.jpg'
import img4 from '../images/beautiful-sunset-view-with-snow-covered-mountains-clouds-as-viewed-from-mount-evans-colorado.jpg'
import Card from "./Card"
import React from 'react'
import Cardgaminglibrary from "./Cardgaminglibrary"
const Gaminglibrary = () => {
    return (
        <>
            <div id="gaminglibrary">
                <div className="row">
                    <div className="col-md-6">
                        <img src={ img1 } />
                    </div>
                    <div className="col-md-6 content">
                        <h1>We pride ourselves on making real food from the best ingredients.</h1>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</h6>
                        <button id='btn1' className="button1" >View More</button>
                    </div>
                </div>
            </div>
            <div id="gaminglibrary1">
                <div className="row">

                    <div className="col-md-6 content" id="content2">
                        <h1>We make everything by hand with the best possible ingredients.</h1>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h6>

                        <div className="icons1">
                            <ul>
                                <li><i class="fa-solid fa-check icons" ></i></li>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                            </ul>
                        </div>
                        <div className="icons1">
                            <ul>
                                <li><i class="fa-solid fa-check icons" ></i></li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                            </ul>
                        </div>
                        <div className="icons1">
                            <ul>
                                <li><i class="fa-solid fa-check icons" ></i></li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                        </div>






                        <button id='btn1' className="button1" >View More</button>
                    </div>

                    <div className="col-md-6">
                        <img src={ img2 } />
                    </div>

                </div>
            </div>


        </>

    )
}

export default Gaminglibrary

