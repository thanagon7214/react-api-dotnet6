import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from 'react';
import TableDataLayout from './page/main/tableDataLayout';
import './vendor/css/main.css';



function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://benzperformance.somee.com/api/products') // เปลี่ยน URL ให้เป็น API ที่ต้องการดึงข้อมูล
    // fetch('https://localhost:7136/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <TableDataLayout data={data} />
      
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}

export default App;
