import homeIcon from "../img/home.svg";
import educationIcon from "../img/education.svg";
import experienceIcon from "../img/experience.svg";
import aboutIcon from "../img/about.svg";
import contactIcon from "../img/contact.svg";

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import "./Navigation.module.css"

export default function Navigation() {
    return (
        <>
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Item>
                                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={"/education"}>Education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={"/experience"}>Experience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Outlet />
        </>
    );
}