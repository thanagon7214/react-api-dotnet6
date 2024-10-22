import React, { Component,useEffect } from 'react';
import SlideShowMain  from '../../layout/home/slideShowMain.js'
import ListProduct from '../../layout/home/listProduct.js'
import Styles from '../../vendor/css/home/mainHome.js'

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
                <div style={{padding:'10px'}}>
                        <div style={{margin:'10px'}}>
                                <SlideShowMain/>
                        </div>
                        <div style={{margin:'10px',paddingLeft:'100px',paddingRight:'100px'}}>
                                <ListProduct/>
                        </div>
                </div>
            </>
        );
    
}

export default MainHome;