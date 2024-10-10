
import React, { Component,useEffect,useState } from 'react';
import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
import StyleSlide from '../../vendor/css/frontStore/home/slide.module.css';
import { Image  } from 'react-bootstrap';
import { } from 'react-bootstrap';

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
  display: 'block',
  height:'400px',
  width:'50%',
  padding: '20px',
  background: '#efefef',
  color: 'black',
  opacity: '0.8'
  }
  
const divStyle = {
  // display: 'flex',
  // alignItems: 'center',

  // justifyContent: 'center',

  // backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundSize: '500px 500px',
  height: '400px',
  // paddingRight:'10%'

}
const imageStyle={
  height: '400px',
}
  const linkStyle = {
    textDecoration: 'none',
    display: 'block',
    height:'400px',
  }
  const slideImages = [
    {
      url: '/upload/image/product/2001.png',
      url2: '/upload/image/product/2002.png',
      url3: '/upload/image/product/2003.png',
      caption: 'เสื้อ ผ้านุ่ม สวมใส่สบาย',
      details:['ผลิตจากผ้าฝ้ายคุณภาพสูง','ให้ความนุ่มสบายทุกการสัมผัส','ตัดเย็บประณีต ใส่ใจทุกตะเข็บ เพื่อความทนทานยาวนาน','ดีไซน์เรียบง่าย สวมใส่ได้ทุกโอกาส เหมาะกับทุกสไตล์','มีหลากหลายสีให้เลือก ตอบโจทย์ทุกการแต่งตัว']
    },
    {
      url: '/upload/image/product/shoe1-1.png',
      url2: '/upload/image/product/shoe2-1.png',
      url3: '/upload/image/product/shoe3-1.png',
      caption: 'รองเท้า',
      details:['ผลิตจากวัสดุคุณภาพสูง น้ำหนักเบา ระบายอากาศได้ดี','พื้นรองเท้าทำจากยางกันลื่น ให้ความมั่นคงทุกก้าวเดิน','รองรับแรงกระแทก ลดอาการเมื่อยล้าขณะสวมใส่เป็นเวลานาน','ดีไซน์ทันสมัย ใส่ได้ทั้งในวันสบายๆ หรือออกกำลังกาย','มีหลากหลายสีและไซส์ให้เลือก เพื่อให้เหมาะกับทุกสไตล์ของคุณ']
    },
    {
      url: '/upload/image/product/bag1-1.png',
      url2: '/upload/image/product/2002.png',
      url3: '/upload/image/product/2003.png',
      caption: 'สินค้าอื่นๆ',
      details:['กระเป๋าหนังสุดหรู สไตล์คลาสสิก','นาฬิกาข้อมือ ดีไซน์เรียบหรู ทันสมัย','เครื่องประดับสุดหรู เสริมความโดดเด่นให้ทุกลุค']
    },
  ];


 
   
   
    
        return (
        <>
            <div className="slide-container">
                <Slide >
                {slideImages.map((slideImage, index)=> (
                    <div key={index} >
                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }} >
                    {/* <div style={{ ...divStyle}} >  */}
                        {/* <Image  style={imageStyle} src={slideImage.url}  /> */}
                        {/* <Image  style={imageStyle} src={slideImage.url2}  />
                        <Image  style={imageStyle} src={slideImage.url3}  /> */}
                        <a lang="th" className="text-th-cus" href='#' style={linkStyle}><span style={spanStyle}>
                          <p>{slideImage.caption}</p>
                          {slideImage.details.map((detailsImage, index)=> (
                            <p>{detailsImage}</p>
                          ))}
                          
                          </span></a>
                    </div>
                 
                    </div>
                ))} 
                </Slide>
            </div>
           
        </>
        );
    
}

export default SlideShowMain;