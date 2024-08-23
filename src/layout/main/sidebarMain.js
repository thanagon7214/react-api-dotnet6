import React, { Component,useState  } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, } from 'react-pro-sidebar';
import { ChevronLeft,ChevronRight } from 'react-bootstrap-icons';


const SidebarMain = () =>{
    const [collapsed,setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setCollapsed(false);
      }
    };
  
    window.addEventListener('resize', handleResize);
    return (
        <>
            <Sidebar collapsed={collapsed} className={isMobile && collapsed ? 'active' : ''}>
        
                <Menu iconShape="square">
                <SubMenu label="dashboard">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
                </Menu>
             
            </Sidebar>
            <div>
            {isMobile && (
                <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
                {/* <ChevronLeft size={24} color="black" /> */}
                {isMobile && collapsed ? <ChevronRight size={24} color="black" />  : <ChevronLeft size={24} color="black" /> }
                </button>
                )}
                </div>
        </>
    );
}

export default SidebarMain;