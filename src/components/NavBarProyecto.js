import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet,Link } from "react-router-dom";

const NavBarProyecto = () => {
    
        return(

            <>
            <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to = "/">Cine Tapia</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to = "/">Inicio</Nav.Link>
                <Nav.Link as={Link} to = "/Peliculas">Peliculas</Nav.Link>
                <Nav.Link as={Link} to = "/Principal">Principal</Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
            <section>
                <Outlet>

                </Outlet>
            </section>
            </>
            
        );
    
}
export default NavBarProyecto;