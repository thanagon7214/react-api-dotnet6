import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button,Stack } from 'react-bootstrap';


const NavbarMain  = (props) => { 
    return (
    <Navbar bg="light" expand="lg" style={{padding:'10px'}}>
        <Navbar.Brand href="#home">ระบบจัดการ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
           
            <Nav className="mr-auto center-navbar-main" >
               
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                
            </Nav>
            <Nav className="mr-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Nav>
            <Nav className="mr-auto">
                <Button variant="outline-success">Search</Button>
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
    );
    
}

export default NavbarMain;