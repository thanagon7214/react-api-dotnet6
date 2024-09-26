import React, { createContext, useState } from 'react';

// สร้าง context
export const AppContext = createContext();

// สร้าง provider component
export const AppProvider = ({ children }) => {
 
 const [username, setUsername] = useState('');
  const [data, setData] = useState(null);

  // ฟังก์ชันสำหรับอัปเดตข้อมูล
  const handleUserUpdate =(data)=>{
    setUsername(data);
  }
  const handleStartData = (newData) => {
    setData(newData); // ฟังก์ชันนี้จะถูกเรียกจากคอมโพเนนต์ลูกเพื่ออัปเดตค่า
  };
  const handleProductDeleted = async(id) => {
    // อัปเดต state โดยลบข้อมูลที่ตรงกับ id ที่ต้องการลบออก
    setData((prevData) => {
      const updatedData = prevData.filter((product) => product.id !== id);
      console.log('Updated data:', updatedData);
      return updatedData;
    });
   
  };
  const handleProductAdded = (newProduct) => {
    // อัปเดต state ด้วยข้อมูลใหม่ที่เพิ่ม
    setData((prevData) => [...prevData, newProduct]);
  };
  const handleProductUpdated = (updatedProduct) => {
    // อัปเดต state โดยค้นหาข้อมูลเดิมแล้วแทนที่ด้วยข้อมูลที่แก้ไข
    setData((prevData) =>
        prevData.map((product) => {
          console.log(product.id,":",updatedProduct.id);
          return  product.id === updatedProduct.id ? updatedProduct : product
        }
        )
    );
  };
  return (
    <AppContext.Provider value={{ username, handleUserUpdate,data,handleStartData,handleProductDeleted,handleProductAdded,handleProductUpdated }}>
      {children}
    </AppContext.Provider>
  );
};
