import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzoon from '../Qzoon/Qzoon';


const RightNBavigation = () => {
    return (
        <div className=''>

            <div className="inline-block">
                <h1>Login With</h1>
                <Button variant="outline-dark"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login with Github</Button>
            </div>
            <div className="mt-5">
                <h1>Find us on</h1>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twittter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instragram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="">
                <Qzoon/>
            </div>
        </div>
    );
};

export default RightNBavigation;