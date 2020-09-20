import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Container from 'react-bootstrap/Container';


export const Footer = () => {
    return (
        <div className="fixed-bottom">  
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand>Footer</NavbarBrand>
            </Container>
        </Navbar>
        </div>
    )
}

export default Footer;


