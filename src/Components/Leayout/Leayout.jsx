import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavigatin from '../Shared/LeftNavigatin';
import RightNBavigation from '../Shared/RightNBavigation';

const Leayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}><LeftNavigatin /> </Col>
                    <Col lg={6}><Outlet /></Col>
                    <Col lg={3}><RightNBavigation /> </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Leayout;