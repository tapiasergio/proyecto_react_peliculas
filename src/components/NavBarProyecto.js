import React, { useState } from "react";
import { NavDropdown, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet,Link } from "react-router-dom";
import InfoLogo from './Images/infoIcon.png'


const NavBarProyecto = () => {
        const [show,setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return(

            <>
            <Navbar  bg="primary" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to = "/">CineTapia</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className="px-auto" as={Link} to = "/Peliculas">Peliculas</Nav.Link>
                <Nav.Link className="ms-1" as={Link} to = "/Principal">Estrenos</Nav.Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to = "/Peliculas">Accion</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item as={Link} to = "/Peliculas">Ver Más</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Más" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to = "/Desarrolladores">Integrantes grupo 8</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item as={Link} to = "/Peliculas">Ver Más</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
            <button className="boton-info" onClick={handleShow}>
                <img className="iLogo" src={InfoLogo} alt="info"></img>
            </button>
            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <OffcanvasHeader closeButton>
                    <OffcanvasTitle>Información <img className="iLogo" src={InfoLogo} alt="info"></img></OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody>
                    <div className="info-canvas">
                    <p>Esta pagina es creada para la materia Programación Web.</p>
                    <p>Es una pagina web de un Cine Ficticio.</p>
                    <p>Se puede salir de este canvas haciendo click fuera de él.</p>
                    <p>Se pueden encontrar distintas cosas creadas por mi en Ver Más.</p>
                    <hr></hr>
                    <h4>Creada por Tapia Sergio.</h4>
                    <a href="https://github.com/tapiasergio" >Ir a mi Repositorio</a>
                    </div>
                    
                </OffcanvasBody>
            </Offcanvas>
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