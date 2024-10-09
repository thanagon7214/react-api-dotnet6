
import React, { Component,useEffect,useState } from 'react';
import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'



const SlideShowMain  = (props) => {
  useEffect(() => {
    // สร้างลิสต์ของไฟล์ CSS ที่ต้องการโหลด
    const cssFiles = [
       
        '/css/react-slideshow-image/styles.css'
    ];

    // สร้างและเพิ่ม <link> สำหรับแต่ละไฟล์ CSS
    const links = cssFiles.map(file => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = file;
        document.head.appendChild(link);
        return link;
    });

    // ลบ <link> เมื่อลองโหนดถูก Unmount
    return () => {
        links.forEach(link => {
            document.head.removeChild(link);
        });
    };
}, []);
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'เสื้อ'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'กางเกง'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'เครื่องประดับ'
    },
  ];


 
   
   
    
        return (
        <>
            <div className="slide-container">
                <Slide indicators={true}>
                {slideImages.map((slideImage, index)=> (
                    <div key={index}>
                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        <a><span style={spanStyle}>{slideImage.caption}</span></a>
                    </div>
                    </div>
                ))} 
                </Slide>
            </div>
        </>
        );
    
}

export default SlideShowMain;