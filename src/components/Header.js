import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar .Brand as={Link} to="/">Sam's Reads</Navbar .Brand>
                <Navbar .Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav .Link as={Link} to="/">Home</Nav .Link>
                        <Nav .Link as={Link} to="/cart">Cart</Nav .Link>
                    </Nav>
                </Navbar .Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
