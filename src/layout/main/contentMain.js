import React, { Component,useEffect, useState,useContext   } from 'react';
import TableDataLayout from './../../page/main/tableDataLayout';

import { Stack,Table,Button,Container, Row, Col, Card } from 'react-bootstrap';
import { PlusCircle ,CardText} from 'react-bootstrap-icons';
import { BrowserRouter as Router, Routes, Route, Link ,useNavigate} from "react-router-dom";
import { AppContext } from '../../AppContext';
// ใช้ Redux hooks
import {  useDispatch } from 'react-redux';
import { setData } from '../../actions';


// import { useTable,useSortBy,usePagination, Navbar, Nav, NavDropdown, Form, FormControl    } from 'react-table';

const ContentMain  = (props) => {
    const navigateLinkContentMain = useNavigate();
    // const { data , handleStartData} = useContext(AppContext);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
          .then((datas) => {
            console.log(datas)
            // props.onUpdateData(data);
            if(datas){
              //Context Api
            // handleStartData(datas)
            dispatch(setData(datas)); 
            }
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
        <div className="content">
            
            
            <Container className="ml-0 max-w-none">
            <Row style={{marginBottom:'10px'}}>
                <Col md={12}>
                
                    <Button className='flex items-center' onClick={() => navigateLinkContentMain("/FormAddProducts")}><PlusCircle size={20} color="white" className="inline-block" /><span className="text-th-cus ml-2 text-xl inline-block" lang="th"> เพิ่มข้อมูล</span></Button>
                 
                </Col>
            </Row>
            <Row style={{marginBottom:'10px'}}>
                <Col md={12}>
                    <hr />
                    
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <Card>
                    <Card.Header className='flex items-center'><CardText size={50} color="black" className="inline-block" /><span className="text-th-cus ml-2 inline-block text-4xl" lang="th">รายละเอียด</span></Card.Header>
                    <Card.Body>
                        
                        <div className="div-table">
                            <Stack direction="horizontal" gap={3} className="">
                                <div className="table-1">
                                {/* <TableDataLayout data={props.data} onProductDeleted={props.onProductDeleted}/> */}
                                <TableDataLayout />
                                </div>
                            </Stack>
                        </div>
                            
                    </Card.Body>
                </Card>
                </Col>
                </Row>
            </Container>
            
            
        </div>
    );
    
}

export default ContentMain;