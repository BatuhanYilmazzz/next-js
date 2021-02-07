import React, { useEffect } from 'react';
import { ProjectItemContainer } from '../../styles';
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos';
const ProjectItem = ({ item }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    let { company, projectName, liveSite, projectImageSrc } = item;
    return (
        <ProjectItemContainer data-aos="fade-up" data-aos-duration="2000">
            <Row className="align-items-center">
                <Col md={6} className="text-center">
                    <h3>{company}</h3>
                    <h2>{projectName}</h2>
                    <h4>{liveSite}</h4>
                </Col>
                <Col md={6} className="text-center">
                    <img src={projectImageSrc} alt="" />
                </Col>
            </Row>
        </ProjectItemContainer>
    );
};

export default ProjectItem;
