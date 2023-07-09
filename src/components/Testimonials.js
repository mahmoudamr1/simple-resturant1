import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image10 from '../images/image10.jpg';
import "./Testimonials.css"
const Testimonials = () => {
    return (
        <>
            <div className='row carouseldiv'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block image-carousel"
                            src={ image10 }
                            alt="First slide"
                        />
                        <Carousel.Caption className='caption-carousel'>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block image-carousel"
                            src={ image10 }
                            alt="Second slide"
                        />

                        <Carousel.Caption className='caption-carousel'>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block image-carousel"
                            src={ image10 }
                            alt="Third slide"
                        />

                        <Carousel.Caption className='caption-carousel'>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default Testimonials
