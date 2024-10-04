import React, { Component,useEffect } from 'react';

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
useEffect(() => {
                // โหลด CSS สำหรับ MDBReact เฉพาะคอมโพเนนต์นี้
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = '/css/mdb.min.css'; // path ของไฟล์ mdb.min.css ที่คุณต้องการโหลด 
                document.head.appendChild(link);
            
                // ลบ CSS ออกเมื่อคอมโพเนนต์นี้ถูก Unmount
                return () => {
                  document.head.removeChild(link);
                };
}, []);
 

   
   
    
        return (
            <>
                    hello 
            </>
        );
    
}

export default MainHome;