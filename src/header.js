import React from 'react'
import "./header.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./images/logomain.png";
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Header = () => {
    return (

        <>

            <Navbar collapseOnSelect expand="lg" className='nav1'>
                <Container>
                    <img src={ logo } />
                    {/* <Navbar.Brand href="#home">Mahmoud Amr</Navbar.Brand> */ }
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#home">explore food</Nav.Link>
                            <Nav.Link href="#link">review</Nav.Link>
                            <Nav.Link href="#home">faq</Nav.Link>
                            <Nav.Link id='lastnavitem'> +201125402033  </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header

//   <Navbar expand="lg">
//                 <Container className='nav1'>
//                     {/* <img src={ logo } /> */ }
//                     <Navbar.Brand href="#home">Mahmoud Amr</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">

//                         <Nav className="ml-auto ">
//                             <Nav.Link href="#home">Home</Nav.Link>
//                             <Nav.Link href="#link">about us</Nav.Link>
//                             <Nav.Link href="#home">explore food</Nav.Link>
//                             <Nav.Link href="#link">review</Nav.Link>
//                             <Nav.Link href="#home">faq</Nav.Link>

//                         </Nav>
//                         <Nav>
//                             <Nav.Link>
//                                 +201125402033
//                             </Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>