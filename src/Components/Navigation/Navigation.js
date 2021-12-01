import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="nav">
                <Container>
                    <Navbar.Brand href="#home">ARNAB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">about</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#projects-page">Projects</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#contact-page">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;