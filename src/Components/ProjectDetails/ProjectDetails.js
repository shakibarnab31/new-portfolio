import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
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
    console.log(projectDetails)
    const found = projectDetails?.filter(pd => pd?.id == projectId)
    console.log(found)
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <Row>
                            <Col sm={12} md={4}>
                                <img src={found[0]?.image1} alt="" />
                            </Col>
                            <Col sm={12} md={4}>

                            </Col>
                            <Col sm={12} md={4}>

                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={12}>

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ProjectDetails;