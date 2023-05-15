import homeIcon from "../img/HB.png";

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import "./Navigation.css"

export default function Navigation() {
    return (
        <>
            <div>
                <Navbar bg="#F0EAD6" expand="sm">
                    <Navbar.Brand>
                        <Link to = {"/"}>
                            <img className="home" src={homeIcon} alt="Home" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Item className="link">
                            <Nav.Link as={Link} to={"/education"}>
                                Education
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="link">
                            <Nav.Link as={Link} to={"/experience"}>
                                Experience
                                </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="link">
                            <Nav.Link as={Link} to={"/about"}>
                                About
                                </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="link">
                            <Nav.Link as={Link} to={"/contact"}>
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