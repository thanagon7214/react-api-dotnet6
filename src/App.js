import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState,useContext  } from 'react';
import { Routes, Route, useLocation ,useNavigate,Link } from 'react-router-dom';
// import TableDataLayout from './page/main/tableDataLayout';
import ContentMain from './layout/main/contentMain';
import NavbarMain from './layout/main/navbarMain';
import SidebarMain from './layout/main/sidebarMain';
import MainHome from './page/home/mainHome';
import FormAddProducts from './page/main/formAddProducts';
import FormEditProducts from './page/main/formEditProducts';
import Login from './page/login/login';
import './vendor/css/main.css';
import './vendor/css/layout/navbarMain.css';

//front store
import NavbarMainHome from './layout/home/navbarMain';
import SlideShowMain from './layout/home/slideShowMain';
import { AppProvider,AppContext } from './AppContext'; // นำเข้า AppProvider

// ใช้ Redux hooks
import { useSelector, useDispatch } from 'react-redux';
import { setUsername } from './actions';

function App() {
 //Context Api
  // const { username, handleUserUpdate  } = useContext(AppContext);
  //redux
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username); 

  const location = useLocation();
  const navigateLinkApp = useNavigate();



   useEffect(() => {
    // ดึงค่า username จาก localStorage เมื่อ component ถูกโหลด
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      // handleUserUpdate(storedUsername);
      dispatch(setUsername(storedUsername)); 
    }
  }, []);


  const hideHeaderAndSidebar = (location.pathname === "/MainHome" || location.pathname === "/Login");
  const checkPathLogin = location.pathname === "/Login";
  const checkBackStore =(location.pathname === "/"||location.pathname === "/FormAddProducts"||location.pathname === "/FormEditProducts"||location.pathname === "/Login")
  const checkFrontStore =(location.pathname === "/MainHome")
  return (
   
    <div className="layout">
     {checkBackStore?<>
      {username && !checkPathLogin?
        <>
       
        {!hideHeaderAndSidebar&&<NavbarMain />}
          <div className="main">
            {!hideHeaderAndSidebar&&<SidebarMain />}
            
           
            <Routes>
        
            <Route path="/" element={<ContentMain />} />
            {/* <Route path="/MainHome" element={<MainHome  />} /> */}
         

            <Route path="/FormAddProducts" element={<FormAddProducts   />} />
          
            <Route path="/FormEditProducts" element={<FormEditProducts   />} />
            </Routes>
          </div>
      
        </>
      :!username && !checkPathLogin?<>ยังไม่ได้ login<Link to="/Login">ไปหน้า login</Link></>
      // :!username && checkPathLogin?<Routes><Route path="/Login" element={<Login  onUserUpdated={handleUserUpdate}/>} /></Routes>:<><Link  to="/">กลับไป หน้าหลักการจัดการ</Link ></>
      :!username && checkPathLogin?<Routes><Route path="/Login" element={<Login />} /></Routes>:<><Link  to="/">กลับไป หน้าหลักการจัดการ</Link ></>
      }
      </>:<></>
    }
    {checkFrontStore?<>
      <NavbarMainHome />
      {/* <div className="main"> */}
      <Routes>
      <Route path="/MainHome" element={<MainHome  />} />
      </Routes>
      
      {/* </div> */}
      {/* <SlideShowMain/> */}
    </>:<></>

    }

    </div>
     
  );
}

export default App;
