import React from 'react';
import {Container,Row,Col,Image,Nav,NavLink,Stack } from 'react-bootstrap';
import styles from '../../vendor/css/frontStore/home/footerMain.module.css'
import {FaSquareYoutube,FaSquareFacebook,FaLine ,FaSquareXTwitter } from 'react-icons/fa6';
const FooterMain = (props) =>{
    return (
        <footer style={{  backgroundColor: '#F7F9FB'}}>
          <Container fluid className="p-4" >
            <Row  className="" style={{ color: '#9FC749'}}>
                <Col sm className="" >
                        <div className={styles['div-center-custom']} >
                        <Image
                            src="/image/home/logo-1.png"
                            style={{height:'60px'}}
                        />
                          </div>
                        <div className={styles['div-center-custom']}>
                        <p>E-shop</p>
                        </div>
                   
                </Col>
                <Col sm className="justify-content-center">
                    <Nav className="flex-column fs-5" >
                        <h2 className={styles['div-center-custom']}>
                        Quick Links
                        </h2>
                        <NavLink href="#" className={styles['div-center-custom']} style={{ color: '#9FC749'}}>Home</NavLink>
                        <NavLink href="#" className={styles['div-center-custom']} style={{ color: '#9FC749'}}>Product</NavLink>
                        <NavLink href="#" className={styles['div-center-custom']} style={{ color: '#9FC749'}}>Sing up</NavLink>
                    </Nav>
                </Col>
                <Col  sm className="justify-content-center">
                    <h2 className={styles['div-center-custom']}>CONTACT US</h2>
                    <NavLink href="#" className={styles['div-center-custom']} style={{ color: '#9FC749'}}>contact@yourcompany.com</NavLink>
                    
                        <p  className={styles['div-center-custom']} >call. +43 720 11 52 78</p>
                        <div className={styles['div-center-custom']} style={{fontSize:'30px'}}>
                            <NavLink href="#"> <FaSquareYoutube /></NavLink>
                            <NavLink href="#"> <FaSquareFacebook /></NavLink>
                            <NavLink href="#"> <FaLine /></NavLink>
                            <NavLink href="#"> <FaSquareXTwitter /></NavLink>
                        </div>
                </Col>
            </Row>

          </Container>
        </footer>
    ) ;
}
export default FooterMain;