import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// import TableDataLayout from './page/main/tableDataLayout';
import ContentMain from './layout/main/contentMain';
import NavbarMain from './layout/main/navbarMain';
import SidebarMain from './layout/main/sidebarMain';
import MainHome from './page/home/mainHome';
import FormAddProducts from './page/main/formAddProducts';
import './vendor/css/main.css';
import './vendor/css/layout/navbarMain.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // fetch('https://benzperformance.somee.com/api/products') // เปลี่ยน URL ให้เป็น API ที่ต้องการดึงข้อมูล .net core6
    fetch('https://localhost:7136/api/products')// // เปลี่ยน URL ให้เป็น API ที่ต้องการดึงข้อมูล .net core6
    // fetch('https://nodeapi-ruddy.vercel.app/api/products') // ปลี่ยน URL ให้เป็น API ที่ต้องการดึงข้อมูล node
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  const handleProductAdded = (newProduct) => {
    // อัปเดต state ด้วยข้อมูลใหม่ที่เพิ่ม
    setData((prevData) => [...prevData, newProduct]);
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const hideHeaderAndSidebar = location.pathname === "/MainHome";
  return (
    
    <div className="layout">
      {!hideHeaderAndSidebar&&<NavbarMain />}
        <div className="main">
          {!hideHeaderAndSidebar&&<SidebarMain />}
          
          {/* <TableDataLayout data={data} /> */}
          <Routes>
          <Route path="/" element={<ContentMain data={data} />} />
          <Route path="/MainHome" element={<MainHome  />} />
          <Route path="/FormAddProducts" element={<FormAddProducts  onProductAdded={handleProductAdded} />} />
          </Routes>
        </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
   
  );
}

export default App;
