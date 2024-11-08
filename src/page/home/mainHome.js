import React, { Component,useEffect } from 'react';
import SlideShowMain  from '../../layout/home/slideShowMain.js'
import ListProduct from '../../layout/home/listProduct.js'
import Styles from '../../vendor/css/frontStore/home/mainHome.module.css'
import NavbarMainHome from '../../layout/home/navbarMain.js';
import FooterMain from '../../layout/home/footerMain.js'
import {
        MDBBreadcrumb,
        MDBBreadcrumbItem,
        MDBContainer,
        MDBNavbar,
        MDBInputGroup,
        MDBIcon,
        MDBInput,
        MDBNavbarLink,
        MDBNavbarNav,
        MDBNavbarItem,
        MDBDropdown,
        MDBDropdownToggle,
        MDBDropdownMenu,
        MDBDropdownItem,
        MDBBadge,
} from 'mdb-react-ui-kit';
      



const MainHome  = (props) => {

 

   
   
    
        return (
            <>
                <div>
                        <NavbarMainHome />
                        <div style={{padding:'10px'}}>
                                <div style={{margin:'10px'}}>
                                        <SlideShowMain/>
                                </div>
                                <div className={Styles['margin-distance-border']}  >
                                        <ListProduct/>
                                </div>
                        </div>
                        <FooterMain />
                </div>
            </>
        );
    
}

export default MainHome;