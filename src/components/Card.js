import "./Card.css"

import React from 'react'

const Card = ( props ) => {
    return (
        <>

            <div class="col-md-4">
                <div class="card">
                    <img src={ props.image } class="card-img-top" alt="" />
                    <div class="card-body card-content">
                        <h5 class="card-title">{ props.title }</h5>
                        <p class="card-text">{ props.newprice }<span>{ props.oldprice }</span> </p>

                        <hr />
                        <button id='btn1'><i class="fas fa-shopping-bag"></i> Order Now</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
