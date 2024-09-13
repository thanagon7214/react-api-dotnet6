import React, { Component,useState  } from 'react';

import { Stack,Table,Button,Container, Row, Col, Card,Form } from 'react-bootstrap';

import { useTable,useSortBy,usePagination, Navbar, Nav, NavDropdown   } from 'react-table';
import { PlusCircle ,CardText,FilePlus,ArrowLeft} from 'react-bootstrap-icons';

import { BrowserRouter as Router, Routes, Route, Link ,useNavigate,useLocation } from "react-router-dom";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const FormEditProducts  = (props) => {
    const location = useLocation();
    const productData = location.state?.productData; // รับค่า productData ที่ส่งมาจาก navigate
    const [isLoading, setIsLoading] = useState(false); 
    const navigateLinkFormAddProducts = useNavigate();
    const [formData, setFormData] = useState({
        id:productData?.id,
        name: productData?.name,
        price:productData?.price,
        type_product: productData?.type_product,
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
        console.log('id:',productData?.id)
        // ส่งข้อมูลฟอร์มไปยัง API หรือจัดการข้อมูลต่อที่นี่

        try {
          setIsLoading(true);

          // ใช้ SweetAlert2 ในการแสดงกล่องโหลด
          MySwal.fire({
            title: 'กำลังโหลด...',
            allowOutsideClick: false, // ไม่ให้ปิด popup ระหว่างโหลด
            didOpen: () => {
              MySwal.showLoading(); // แสดง icon โหลด
            }
          });
          const response = await fetch(`https://localhost:7136/api/products/${productData?.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          console.log("success",response);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log('Product udpate:', formData);
          if (props.onProductUpdated) {
            props.onProductUpdated(formData);
          }
          MySwal.fire({
            title: 'แก้ไขข้อมูลสำเร็จ',
          
            icon: 'success',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              navigateLinkFormAddProducts('/'); // ทำการ redirect เมื่อกด OK
            }
          });
        } catch (error) {
          console.log("fail");
          console.error('There was an error adding the product:', error);
          MySwal.fire({
            title: 'แก้ไขข้อมูลไม่สำเร็จ',
         
            icon: 'error',
            confirmButtonText: 'OK'
          }).then((result) => {
           
          });
        }
        // finally {
        
        //   setIsLoading(false);
        //   MySwal.fire({
        //     title: 'แก้ไขข้อมูลไม่สำเร็จสำเร็จs',
        //     // text: 'This is a SweetAlert2 popup in React!',
        //     icon: 'error',
        //     confirmButtonText: 'OK'
        //   }).then((result) => {
           
        //   });
        // }
      };
 
        return (
            <div className="content">
        
                <Container className="ml-0 max-w-none">
                    <Row style={{marginBottom:'10px'}}>
                      <Col md={12}>
                      <Button onClick={() => navigateLinkFormAddProducts("/")} style={{ display: 'flex', alignItems: 'center'}}><ArrowLeft   className="inline-block" size={20} style={{}}/><span className="text-th-cus ml-2 text-xl inline-block" lang="th">ก่อนหน้า</span></Button>
                      </Col>
                    </Row>
                    <Row style={{marginBottom:'10px'}}>
                        <Col md={12}>
                        <Card>
                            <Card.Header className='flex items-center'><PlusCircle size={50} color="black" className="inline-block" /><span className="text-th-cus ml-2 inline-block text-4xl" lang="th">แก้ไขสินค้า</span></Card.Header>
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

export default FormEditProducts;