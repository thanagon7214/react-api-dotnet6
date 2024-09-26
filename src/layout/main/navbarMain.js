import React, { Component,useContext } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button,Stack } from 'react-bootstrap';
import {Link ,useNavigate} from 'react-router-dom';
import '../../vendor/css/layout/navbarMain.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContext} from '../../AppContext'
const NavbarMain  = (props) => { 
    const { username,handleUserUpdate } = useContext(AppContext);
    const navigateLinkNavBarMain = useNavigate();
    const handleSignOut = (event) => {
        event.preventDefault();
        console.log("s");
        // username
        localStorage.removeItem('username');
        // props.onUserUpdated("")
        handleUserUpdate("");
        navigateLinkNavBarMain("/Login");
    }

    return (
    <Navbar bg="light" expand="lg" style={{padding:'10px'}}>
        <Navbar.Brand href="#home" className="text-th-cus"  lang="th">ระบบจัดการ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
           
            <Nav className="mr-auto center-navbar-main" >
               
                <Nav.Link onClick={() => navigateLinkNavBarMain("/")} className="text-th-cus"  lang="th">หน้าหลักระบบจัดการ</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                
            </Nav>
            <Navbar.Brand  className="text-th-cus"  lang="th">{username}</Navbar.Brand>
            <Navbar.Brand  className="text-th-cus text-sign-out"  lang="th" onClick={handleSignOut}>ออกจากระบบ</Navbar.Brand>
            {/* <Nav className="mr-auto">
                <Button className="text-th-cus" lang="th" variant="outline-dark" >ออกจากระบบ</Button>
            </Nav> */}
            {/* <Nav className="mr-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            
            </Nav> */}
            {/* <Nav className="mr-auto">
                <Button className="text-th-cus" lang="th" variant="outline-success">ออกจากระบบ</Button>
            </Nav> */}
            
        </Navbar.Collapse>
    </Navbar>
    );
    
}

export default NavbarMain;