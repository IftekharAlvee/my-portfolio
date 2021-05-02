import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const style = {
        backgroundColor: "#dff3f5"
    }
    return (
        <div className="py-5" style={style} >
            <Nav className="justify-content-center"  activeKey="/home">
                <Nav.Item>
                <Nav.Link href="/home" ><Link style={{color:"black"}} to="/" >Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-1"><Link style={{color:"black"}} to="/about">About</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-2"><Link style={{color:"black"}} to="/portfolio" >Portfolio</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-3">
                <Link style={{color:"black"}} to="/contacts">Contact me</Link>
                </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Navigation;