import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
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
                <Row className="gy-5">
                    {projects.map(project =>
                        <Col sm={12} md={4} key={project.id}>
                            <Card className=" project-card">
                                <div className="card-img">
                                    <Card.Img variant="top" src={project.image1} className=" w-100 " />
                                </div>
                                <Card.Body className="text-start bg-dark project-body">
                                    <Card.Title> <h3 className="fw-bolder text-white">{project.name}</h3> </Card.Title>
                                    <Card.Text className="text-white">
                                        {project.description}
                                    </Card.Text>
                                    <a href="https://drona-drone-shop.web.app/" target="blank">
                                        <Button className="bg-info border-0">Live Site</Button>
                                    </a>
                                    <Link to={`/projectDetails/${project.id}`}><Button className="ms-2 bg-warning border-0">Details</Button></Link>

                                </Card.Body>
                            </Card>
                        </Col>

                    )}
                </Row>

            </Container>
        </div>
    );
};

export default Projects;