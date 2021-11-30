import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="nav">
                <Container>
                    <Navbar.Brand href="#home">ARNAB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link activeStyle={{ color: 'red' }} href="#about-page">about</Nav.Link>
                            <Nav.Link href="#projects-page">Projects</Nav.Link>
                            <Nav.Link href="#contact-page">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;