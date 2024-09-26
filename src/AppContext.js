import React, { createContext, useState } from 'react';

// สร้าง context
export const AppContext = createContext();

// สร้าง provider component
export const AppProvider = ({ children }) => {
 
  const [username, setUsername] = useState('');

  // ฟังก์ชันสำหรับอัปเดตข้อมูล

  return (
    <AppContext.Provider value={{ data, username, handleUpdateData, handleUserUpdate }}>
      {children}
    </AppContext.Provider>
  );
};
