import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../images/about-pic.png'
import './About.css'
import { FaUser, FaGift, FaMapMarkerAlt, FaSchool, FaEnvelope, FaCalendarAlt, FaBookReader, FaPhoneSquareAlt, FaGlobeAsia, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
const About = () => {
    return (
        <div id="about" className="about">
            <div>
                <h1 className=" contact-title1 mb-5">ABOUT <span className="contact-title2">ME</span></h1>
            </div>
            <Container className="about-container p-5">
                <Row className="gy-5">
                    <Col sm={12} md={4}>
                        <img src={about} className="img-fluid" alt="" />
                    </Col>
                    <Col sm={12} md={8} className="px-4">

                        <div className="text-start text-white">
                            <h4 className="about-info my-4"><FaUser size={30} style={{ fill: 'goldenrod' }} /> <span className="ms-3">PERSONAL INFO</span> </h4>
                            <p>Hi! My name is <span className="text-info fst-italic">Nazmush Shakib Arnab.</span> I am a Web Developer, and I'm very passionate and dedicated to my work. After doing professional courses on web development and finishing some projects, I have acquired the skills and knowledge necessary to make your project a success.</p>
                        </div>
                        <Row>
                            <Col sm={6} md={6}>
                                <div className="text-start mt-3">
                                    <h6 className="text-white about-info"><FaGift size={20} style={{ fill: 'goldenrod' }} /> <span className="ms-2">BirthDay: 08.11.1997</span> </h6>
                                </div>
                                <div className="text-start mt-3">
                                    <h6 className="text-white about-info"><FaMapMarkerAlt size={20} style={{ fill: 'goldenrod' }} /> <span className="ms-2">Location: <small>Faridpur,Bangladesh</small></span> </h6>
                                </div>
                                <div className="text-start mt-3">
                                    <h6 className="text-white about-info"><FaSchool size={20} style={{ fill: 'goldenrod' }} /> <span className="ms-2">Study: <small>Nantong University,China</small></span> </h6>
                                </div>
                                <div className="text-start mt-3">
                                    <h6 className="text-white about-info"><FaEnvelope size={20} style={{ fill: 'goldenrod' }} /> <span className="ms-2">Mail: <small>arnab.muslim@gamil.com</small></span> </h6>
                                </div>

                            </Col>
                            <Col sm={6} md={6}>
                                <div className="text-start mt-3">
                                    <h6 className="text-white about-info"><FaCalendarAlt size={20} style={{ fill: 'goldenrod' }} /> <span className="ms-2">Age:<small>24</small></span> </h6>
                                </div>
                                <div className="text-start mt-3">
                                    <h6 className="text-white about-info"><FaBookReader size={20} style={{ fill: 'goldenrod' }} /> <span className="ms-2">Interest: <small>Coding,Reading</small></span> </h6>
                                </div>
                                <div className="text-start mt-3">
                                    <h6 className="text-white about-info"><FaGlobeAsia size={20} style={{ fill: 'goldenrod' }} /> <span className="ms-2">Nationality: <small>Bangladeshi</small></span> </h6>
                                </div>
                                <div className="text-start mt-3">
                                    <h6 className="text-white about-info"><FaPhoneSquareAlt size={20} style={{ fill: 'goldenrod' }} /> <span className="ms-2">Phone: <small>01785008257</small></span> </h6>
                                </div>
                            </Col>
                        </Row>
                        <div className="my-4">
                            <h3 className="text-white text-start mb-3">SOCIAL MEDIA</h3>
                            <ul className=" d-flex justify-content-start">
                                <li className="me-3"><a target="blank" href="https://www.facebook.com/shakib.arnab"> <FaFacebook size={30} style={{ fill: '' }} /> </a></li>
                                <li><a target="blank" href="https://www.facebook.com/shakib.arnab"> <FaWhatsapp size={30} style={{ fill: '' }} /> </a></li>
                                <li className="mx-3"><a target="blank" href="https://www.facebook.com/shakib.arnab"> <FaInstagram size={30} style={{ fill: '' }} /> </a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default About;