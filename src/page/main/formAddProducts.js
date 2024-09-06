import React, { Component,useState  } from 'react';

import { Stack,Table,Button,Container, Row, Col, Card,Form } from 'react-bootstrap';

import { useTable,useSortBy,usePagination, Navbar, Nav, NavDropdown   } from 'react-table';
import { PlusCircle ,CardText,FilePlus} from 'react-bootstrap-icons';

import { BrowserRouter as Router, Routes, Route, Link ,useNavigate} from "react-router-dom";

const FormAddProducts  = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        type_product: ''
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        // ส่งข้อมูลฟอร์มไปยัง API หรือจัดการข้อมูลต่อที่นี่

        try {
          const response = await fetch('https://localhost:7136/api/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log('Product added:', data);
          if (props.onProductAdded) {
            props.onProductAdded(data);
          }
        } catch (error) {
          console.error('There was an error adding the product:', error);
        }
      };
 
    const navigateLinkFormAddProducts = useNavigate();
        return (
            <div className="content">
        
                <Container className="ml-0 max-w-none">
                    <Row style={{marginBottom:'10px'}}>
                        <Col md={12}>
                        <Card>
                            <Card.Header className='flex items-center'><PlusCircle size={50} color="black" className="inline-block" /><span className="text-th-cus ml-2 inline-block text-4xl" lang="th">เพิ่มสินค้า</span></Card.Header>
                            <Card.Body>
                           
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter your price"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="formMessage">
              <Form.Label>Type product</Form.Label>
              <Form.Select 
                name="type_product"
                value={formData.type_product}
                onChange={handleChange}
                aria-label="Select product type">
                <option>Open this select menu</option>
                <option value="1">เสื้อ</option>
                <option value="2">รองเท้า</option>
                <option value="3">เครื่องประดับ</option>
              </Form.Select>
              {/* <Form.Control
               type="text"
                name="type_product"
                value={formData.type_product}
                onChange={handleChange}
                placeholder="Enter your type_product"
                
              /> */}
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>

                                    
                            </Card.Body>
                        </Card>
                        
                            {/* <Button className='flex items-center' onClick={() => navigateLinkFormAddProducts("/FormAddProducts")}><PlusCircle size={16} color="white" className="inline-block" /><span className="text-th-cus ml-2 inline-block" lang="th"> เพิ่มข้อมูล</span></Button> */}
                        
                        </Col>
                    </Row>
                </Container>
                     
            </div>
        );
    
}

export default FormAddProducts;