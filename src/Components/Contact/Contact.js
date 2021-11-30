import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './Contact.css'
import emailjs from 'emailjs-com';
import { HiMailOpen, HiLocationMarker, HiPhone } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";
const Contact = () => {

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_5sjpfvj', e.target, 'user_OZhkDBITa2HACZOVPT1KU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div id="contact-page" className="contact">
            <div className="contact-title">
                <h1 className=" contact-title1">GET IN <span className="contact-title2">TOUCH</span></h1>
            </div>
            <Container>

                <Row>
                    <Col sm={12} md={4}>
                        <div className="text-start text-white">
                            <h2>DON'T BE SHY</h2>
                            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>
                        <div className="contact-info">
                            <div>
                                <HiLocationMarker size={40} style={{ fill: 'goldenrod' }} />
                            </div>
                            <div className="text-start ms-3">
                                <h6 className="text-white">ADDRESS POINT</h6>
                                <h6 className="text-white">Momin Khar Hat, Faridpur Sadar, Faridpur</h6>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div>
                                <HiMailOpen size={40} style={{ fill: 'goldenrod' }} />
                            </div>
                            <div className="text-start ms-3">
                                <h6 className="text-white">MAIL ME</h6>
                                <h6 className="text-white">arnab.muslim@gmial.com</h6>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div>
                                <FaPhoneSquareAlt size={36} style={{ fill: 'goldenrod' }} />
                            </div>
                            <div className="text-start ms-3">
                                <h6 className="text-white">CALL ME</h6>
                                <h6 className="text-white">01785008257</h6>
                            </div>
                        </div>

                    </Col>
                    <Col sm={12} md={8}>
                        <Form onSubmit={sendEmail} className="mx-2">
                            <Row className="mb-4">
                                <Form.Group as={Col}>
                                    <Form.Control className="rounded-pill contact-input border-0 p-2" type="text" placeholder="Enter Name" name="name" />
                                </Form.Group>
                                {/* <input className="contact-input border-0 p-2" type="text" name="name" id="" placeholder="Enter name" />
                                <input className="contact-input border-0 p-2" type="email" name="email" id="" placeholder="Enter email" /> */}
                                <Form.Group as={Col} >
                                    <Form.Control type="email" className="rounded-pill contact-input border-0 p-2" placeholder="Enter email" name="email" />
                                </Form.Group>
                            </Row>
                            <Form.Group as={Col} >
                                <Form.Control className="rounded-pill contact-input border-0 p-2" type="text" name="subject" placeholder="Subject" />
                            </Form.Group>
                            <Form.Control className="my-4 contact-input border-0" type="text" as="textarea" cols="30" rows="7" placeholder="message" name="message" />

                            <Form.Group className="text-start">
                                <Button className="w-25 rounded-pill contact-button border-0" type="submit">
                                    Send Message
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Contact;