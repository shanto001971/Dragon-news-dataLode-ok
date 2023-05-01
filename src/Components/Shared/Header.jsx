import React, { useContext } from 'react';
import moment from 'moment';
import { Button, Container, Nav } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { authProvaider } from '../../AuthContex/AuthContex';

const Header = () => {
    const {user}=useContext(authProvaider)

    return (
        <Container>
            <div className="text-center">
                <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d9/Gosu_Website_header.png"} alt="" />
                <p>jarnalejom with far of favor</p>
                <p>{moment().format("MMM Do YYYY")}</p>
            </div>
            <div className="d-flex text-center">
                <Button className='mb-5' variant="danger">Latest</Button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <div className="d-flex justify-content-between">
                <div className="">
                    <Nav variant="pills" activeKey="1" >
                        <Nav.Item>
                            <Nav.Link eventKey="1" href="#/home">
                                NavLink 1 content
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" title="Item">
                                NavLink 2 content
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3" disabled>
                                NavLink 3 content
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="">

                    { user?
                        <Button className='mb-5' variant="danger">Logout</Button>:
                        <Button className='mb-5' variant="danger">Login</Button>
                    }
                </div>
            </div>
        </Container>
    );
};

export default Header;