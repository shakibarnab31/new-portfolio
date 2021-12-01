import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/arnab2.jpg'
import Navigation from '../Navigation/Navigation';
import './Banner.css'
import Typical from 'react-typical'

const Banner = () => {
    return (
        <div className="banner">
            <Navigation></Navigation>
            <Container>
                <Row className="banner-logo-content">
                    <Col sm={12} md={6} className=' d-flex  align-items-center justify-content-md-end justify-content-center'>
                        <img src={logo} className=' banner-logo' alt="" />
                    </Col>
                    <Col sm={12} md={6} className=' d-flex  align-items-center justify-content-start'>
                        <div className='text-start ms-4'>
                            <p className="text-white">HI THERE</p>
                            <h1 className="text-white fw-bold">I'm Nazmush Shakib Arnab</h1>
                            <h1 className=" banner-info">
                                <Typical
                                    loop={Infinity}
                                    wraper="h1"
                                    steps={[
                                        'a Web Developer', 1000, 'a Front End Developer', 1000, 'a Mern Stack Developer', 1000
                                    ]}
                                />
                            </h1>
                            <p className="text-white">I design and develop spectacular and modern website using different technologies.Please visit my portfolio projects for explicit view of me</p>
                            <a href="https://drive.google.com/uc?id=18MH87yyfxnTBg9-h6g9uUk2_hupeDicW&export=download"><Button className="bg-info border-0">Download Resume</Button>
                            </a>


                        </div>
                    </Col>
                </Row>

            </Container>
        </div >
    );
};

export default Banner;