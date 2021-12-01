import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Navigation from '../Navigation/Navigation';
import './ProjectDetails.css'

const ProjectDetails = () => {
    const [projectDetails, setProjectDetails] = useState([]);

    const { projectId } = useParams();
    console.log(projectId)
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setProjectDetails(data))

    }, []);

    const found = projectDetails?.filter(pd => pd?.id == projectId)

    return (
        <div className="project-details">
            <Navigation></Navigation>
            <h2>PROJECT DETAILS</h2>
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <Row className="gy-5">
                            <Col sm={12} md={4}>
                                <div className="pd-image">
                                    <img className="img-fluid" src={found[0]?.image1} alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={4} >
                                <div className="pd-image">
                                    <img className="w-100" src={found[0]?.image2} alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={4} >
                                <div className="pd-image">
                                    <img className="img-fluid" src={found[0]?.image3} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                <Row>
                    <Col sm={12} md={9} className="code-link d-flex features p-5 mt-5">
                        <li>
                            <a target="blank" href={found[0]?.live}><Button variant="secondary" className="link-btn">Live Site</Button></a>
                        </li>
                        <li>
                            <a target="blank" href={found[0]?.clientCode}><Button variant="secondary" className="link-btn">Client Code</Button></a>
                        </li>
                        <li>
                            <a target="blank" href={found[0]?.serverCode}><Button variant="secondary" className="link-btn">Server Code</Button></a>
                        </li>

                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={9} className="features my-5 text-white text-start  p-5">
                        <h3>DESCRIPTION</h3>
                        <p > {found[0]?.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={9} className="text-white text-start features p-5">
                        <h3 >TECHNOLOGIES</h3>
                        <ul className="d-flex flex-wrap">
                            {found[0]?.Technologies.map(technology =>
                                <li className="technology">{technology}</li>
                            )}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-white text-start features p-5 my-5" sm={12} md={9}>
                        <h3>KEY FEATURES</h3>
                        <p>1. {found[0]?.Feature1}</p>
                        <p>2. {found[0]?.feature2}</p>
                        <p>3. {found[0]?.feature3}</p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ProjectDetails;