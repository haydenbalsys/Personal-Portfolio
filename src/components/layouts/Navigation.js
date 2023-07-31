import React, { useState } from "react";
import homeIcon from "../img/HB.png";
import { HashLink } from 'react-router-hash-link';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./Navigation.css"

export default function Navigation() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div>
                <Navbar bg="#F0EAD6" expand="sm" expanded={expanded}>
                    <Navbar.Brand>
                        <HashLink to={"#home"} onClick={() => setExpanded(false)}>
                            <div className="image">
                                <img className="home" src={homeIcon} alt="Home" />
                            </div>
                        </HashLink>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Item className="link">
                                <Nav.Link as={HashLink} to={"#education"} onClick={() => setExpanded(false)}>
                                    Education
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="link">
                                <Nav.Link as={HashLink} to={"#experience"} onClick={() => setExpanded(false)}>
                                    Experience
                                </Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item className="link">
                                <Nav.Link as={HashLink} to={"#about"} onClick={() => setExpanded(false)}>
                                    About
                                </Nav.Link>
                            </Nav.Item> */}
                            <Nav.Item className="link">
                                <Nav.Link as={HashLink} to={"#contact"} onClick={() => setExpanded(false)}>
                                    Contact
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <Outlet />
        </>
    );
}
