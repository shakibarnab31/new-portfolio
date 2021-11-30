import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import drona from '../../images/drona.png'
import travele from '../../images/travele.png'
import medicare from '../../images/medicare.png'
import './Projects.css'
import { Link } from 'react-router-dom';
const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div id="projects-page" className="projects">
            <div className="contact-title">
                <h1 className=" contact-title2">MY <span className="contact-title1">PROJECTS</span></h1>
            </div>
            <Container>
                <Row>
                    {projects.map(project =>
                        <Col sm={12} md={4}>
                            <Card className="h-100 project-card">
                                <div className="card-img">
                                    <Card.Img variant="top" src={project.image1} className=" w-100 " />
                                </div>
                                <Card.Body className="text-start bg-dark">
                                    <Card.Title> <h3 className="fw-bolder text-white">{project.name}</h3> </Card.Title>
                                    <Card.Text className="text-white">
                                        {project.description}
                                    </Card.Text>
                                    <a href="https://drona-drone-shop.web.app/" target="blank">
                                        <Button variant="primary">Live Site</Button>
                                    </a>
                                    <Link to={`/projectDetails/${project.id}`}><Button>Details</Button></Link>

                                </Card.Body>
                            </Card>
                        </Col>

                    )}

                    {/* <Col sm={12} md={4}>
                        <Card className="h-100 project-card" >
                            <div className="card-img">
                                <Card.Img variant="top" src={travele} className="w-100 " />
                            </div>
                            <Card.Body className="text-start">
                                <Card.Title><h3 className="fw-bolder">Travele Tour Agency</h3></Card.Title>
                                <Card.Text>
                                    It is travel booking website.Users can choose his best travel packages and book it. He also can see his ordered and manage it.
                                </Card.Text>
                                <Button variant="primary">Live Site</Button>
                            </Card.Body>
                        </Card>
                    </Col  >
                    <Col sm={12} md={4}>
                        <Card className="h-100 project-card" >
                            <div className="card-img">
                                <Card.Img variant="top" src={medicare} className="w-100 " />
                            </div>
                            <Card.Body className="text-start">
                                <Card.Title><h3 className="fw-bolder">Medicare Hospital Ltd</h3></Card.Title>
                                <Card.Text>
                                    It is Hospital website.Users can route to different pages from nav bar. Users can also see all doctors and appointment system.
                                </Card.Text>
                                <Button variant="primary">Live Site</Button>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>

            </Container>
        </div>
    );
};

export default Projects;