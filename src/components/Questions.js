import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image10 from '../images/image10.jpg';
import "./Questions.css"
import Form from 'react-bootstrap/Form';
const Questions = () => {
    return (
        <>
            <div id='Questions'>
                <div className='row'>
                    <div className='col-md-12 titlequestions'>
                        <h1>Frequently Asked Questions</h1>
                    </div>
                </div>

                <div className='row'>

                    <div className='col-md-6'  >
                        <h2><span>~</span> Is Foodera Bread really baked fresh each day?</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>

                    <div className='col-md-6'>
                        <h2><span>~</span> Do you bake breads containing animal fats or products?</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>



                </div>
                <hr />
                <div className='row'>

                    <div className='col-md-6'  >
                        <h2><span>~</span>  Can I order your products online</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>

                    <div className='col-md-6'>
                        <h2><span>~</span> When are you opening a shop near me?</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>



                </div>
            </div>

            <div className='sec11'>
                <h1> Baked fresh daily by bakers with passion.</h1>
                <button id='btn1'>Learn More</button>
            </div>
            <div className='sec12'>
                <h1>Hurry up! Subscribe our newsletter<br />
                    and get 25% Off</h1>
                <p>Limited time offer for this month. No credit card required.</p>

                <Form id='Questios-email'>
                    <Form.Control type="email" placeholder="Enter email" />
                    <button id='btn1'>Subscribe</button>
                </Form>
            </div>
        </>
    )
}

export default Questions