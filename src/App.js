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
import { AppProvider,AppContext } from './AppContext'; // นำเข้า AppProvider

function App() {
  // const [data, setData] = useState(null);
  // const [username, setUsername] = useState('');
  const { username, handleUserUpdate  } = useContext(AppContext);
  const location = useLocation();
  const navigateLinkApp = useNavigate();


  // const handleUpdateData = (newData) => {
  //   setData(newData); // ฟังก์ชันนี้จะถูกเรียกจากคอมโพเนนต์ลูกเพื่ออัปเดตค่า
  // };
  // const handleProductAdded = (newProduct) => {
  //   // อัปเดต state ด้วยข้อมูลใหม่ที่เพิ่ม
  //   setData((prevData) => [...prevData, newProduct]);
  // };
  // const handleProductUpdated = (updatedProduct) => {
  //   // อัปเดต state โดยค้นหาข้อมูลเดิมแล้วแทนที่ด้วยข้อมูลที่แก้ไข
  //   setData((prevData) =>
  //       prevData.map((product) => {
  //         console.log(product.id,":",updatedProduct.id);
  //         return  product.id === updatedProduct.id ? updatedProduct : product
  //       }
  //       )
  //   );
  // };
  // const handleProductDeleted = async(id) => {
  //   // อัปเดต state โดยลบข้อมูลที่ตรงกับ id ที่ต้องการลบออก
 
  //   setData((prevData) => {
  //     const updatedData = prevData.filter((product) => product.id !== id);
  //     console.log('Updated data:', updatedData);
  //     return updatedData;
  //   });
   
  // };
   useEffect(() => {
    // ดึงค่า username จาก localStorage เมื่อ component ถูกโหลด
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      handleUserUpdate(storedUsername);
    }
  }, []);
  // useEffect(() => {
  //   // ดึงค่า username จาก localStorage เมื่อ component ถูกโหลด
  //   const storedUsername = localStorage.getItem('username');
  //   if (storedUsername) {
  //     setUsername(storedUsername);
  //   }
  // }, [username]);

  // const handleUserUpdate =(data)=>{
  //   setUsername(data);
  // }

  const hideHeaderAndSidebar = (location.pathname === "/MainHome" || location.pathname === "/Login");
  const checkPathLogin = location.pathname === "/Login";
  return (
   
    <div className="layout">
     
      {username && !checkPathLogin?
        <>
        {/* {!hideHeaderAndSidebar&&<NavbarMain username={username} onUserUpdated={handleUserUpdate}/>} */}
        {!hideHeaderAndSidebar&&<NavbarMain />}
          <div className="main">
            {!hideHeaderAndSidebar&&<SidebarMain />}
            
            {/* <TableDataLayout data={data} /> */}
            <Routes>
            {/* <Route path="/" element={<ContentMain data={data} onUpdateData={handleUpdateData} onProductDeleted={handleProductDeleted}/>} /> */}
            <Route path="/" element={<ContentMain />} />
            <Route path="/MainHome" element={<MainHome  />} />
         
            {/* <Route path="/FormAddProducts" element={<FormAddProducts  onProductAdded={handleProductAdded} />} /> */}
            <Route path="/FormAddProducts" element={<FormAddProducts   />} />
            {/* <Route path="/FormEditProducts" element={<FormEditProducts  onProductUpdated={handleProductUpdated} />} /> */}
            <Route path="/FormEditProducts" element={<FormEditProducts   />} />
            </Routes>
          </div>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </>
      :!username && !checkPathLogin?<>ยังไม่ได้ login<Link to="/Login">ไปหน้า login</Link></>
      // :!username && checkPathLogin?<Routes><Route path="/Login" element={<Login  onUserUpdated={handleUserUpdate}/>} /></Routes>:<><Link  to="/">กลับไป หน้าหลักการจัดการ</Link ></>
      :!username && checkPathLogin?<Routes><Route path="/Login" element={<Login />} /></Routes>:<><Link  to="/">กลับไป หน้าหลักการจัดการ</Link ></>
      }
      
    

    </div>
     
  );
}

export default App;
