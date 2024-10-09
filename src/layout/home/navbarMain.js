
import React, { Component,useEffect,useState } from 'react';


import { Navbar, Container,Button ,Form ,Nav ,NavDropdown,Offcanvas  } from 'react-bootstrap';
import { CartFill } from 'react-bootstrap-icons';
import Stack from 'react-bootstrap/Stack';
import styles from '../../vendor/css/frontStore/home/navbartop.module.css'; 
const NavbarMain  = (props) => {
  useEffect(() => {
    // สร้างลิสต์ของไฟล์ CSS ที่ต้องการโหลด
    const cssFiles = [
        '/css/bootstrap.min.css', 
     
    ];

    // สร้างและเพิ่ม <link> สำหรับแต่ละไฟล์ CSS
    const links = cssFiles.map(file => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = file;
        document.head.appendChild(link);
        return link;
    });

    // ลบ <link> เมื่อลองโหนดถูก Unmount
    return () => {
        links.forEach(link => {
            document.head.removeChild(link);
        });
    };
}, []);

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

 
   
   
    
        return (
          <>
    <Navbar  className={styles['navbar-top']}>
      
        <Navbar.Brand href="#home"  style={{marginRight:'100px !important'}}>E-shop</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      
    </Navbar>
    <Navbar collapseOnSelect expand="lg" className={styles['navbar-top-two']}  >
      
        <Navbar.Brand href="#home" className={styles['navbar-top-two-banner']}><img src={'./image/home/logo-1.png'} alt="Logo" style={{height: '60px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className={styles['navbar-hide-one']} >
          <Nav className="me-auto justify-content-md-center" style={{width:'100%'}}>
           
              <Nav.Link href="#features" className="text-left">Features</Nav.Link>
              <Nav.Link href="#pricing" className="text-left">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown" className="text-left">
                <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
         
          </Nav>
          <Nav className={styles['div-cart']}>
          <Navbar.Brand ><Button className={styles['button-cart']}  onClick={handleShow}><CartFill size={24}  /></Button><Button className={styles['button-count-cart']}>0</Button></Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
        );
    
}

export default NavbarMain;