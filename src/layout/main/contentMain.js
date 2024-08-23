import React, { Component } from 'react';
import TableDataLayout from './../../page/main/tableDataLayout';

import { Stack,Table,Button,Container, Row, Col, Card } from 'react-bootstrap';

// import { useTable,useSortBy,usePagination, Navbar, Nav, NavDropdown, Form, FormControl    } from 'react-table';

const ContentMain  = (props) => {
    return (
        <div className="content">
            
            
            <Container className="ml-0 max-w-none">
            
            <Row>
                <Col md={12}>
                <Card>
                    <Card.Header><h1 className="text-th-cus" lang="th">รายละเอียด</h1></Card.Header>
                    <Card.Body>
                        
                        <div className="div-table">
                            <Stack direction="horizontal" gap={3} className="">
                                <div className="table-1">
                                <TableDataLayout data={props.data} />
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