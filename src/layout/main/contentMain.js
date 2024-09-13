import React, { Component } from 'react';
import TableDataLayout from './../../page/main/tableDataLayout';

import { Stack,Table,Button,Container, Row, Col, Card } from 'react-bootstrap';
import { PlusCircle ,CardText} from 'react-bootstrap-icons';
import { BrowserRouter as Router, Routes, Route, Link ,useNavigate} from "react-router-dom";


// import { useTable,useSortBy,usePagination, Navbar, Nav, NavDropdown, Form, FormControl    } from 'react-table';

const ContentMain  = (props) => {
    const navigateLinkContentMain = useNavigate();
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
                                <TableDataLayout data={props.data} onProductDeleted={props.onProductDeleted}/>
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