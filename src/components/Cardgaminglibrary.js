import img1 from '../images/beautiful-frost-pattern-window.jpg'
import img2 from '../images/sky-full-stars-silhouettes-trees.jpg'
import img3 from '../images/vestrahorn-mountains-stokksnes-iceland.jpg'
import img4 from '../images/beautiful-sunset-view-with-snow-covered-mountains-clouds-as-viewed-from-mount-evans-colorado.jpg'
import Card from "./Card"
import React from 'react'
import "./CardGaminglibrary.css"
const Cardgaminglibrary = () => {
    return (
        <>
            <div className="card mb-3" id="gamingcard" style={ { maxWidth: "540px", minHight: "auto !important" } }>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={ img1 } class="img-fluid rounded-start" alt="..." id="gamingimg" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardgaminglibrary
